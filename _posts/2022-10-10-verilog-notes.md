---
layout: post
title: "Verilog学习笔记:基础语法与代码规范总结"
date: 2022-10-10 12:00:00
description: >
  本文对Verilog语言进行简要概览,并给出学习过程中的代码案例,旨在梳理语法要点,帮助快速入门Verilog语法。
categories: ["notes"]
math: true
---
## Verilog基本代码规范

### 格式

- 推荐使用**驼峰命名法**
- 注释规则与C语言类似
- 标识符和关键字命名同C语言

### 数值表示

共有4种方法表示数字逻辑电平:

1. 0: 低电平
2. 1: 高电平
3. x: 未知电平
4. z: 高阻状态

数值声明中可以使用4种进制:

- 十进制 (`'d`或`'D`)
- 十六进制 (`'h`或`'H`)
- 二进制 (`'b`或`'B`)
- 八进制 (`'o`或`'O`)

可以指定数值位宽,也可以不指定。例如:

```verilog
32 'h3022_c0de // 32位十六进制数

```

### 字符串

使用双引号包裹字符串。

### 数据类型

两种主要数据类型:**线网**(wire)和**寄存器**(reg)。

#### 线网(wire)

用于表示硬件逻辑之间的物理连线,例如:

```verilog
wire flag1, flag2;

```

#### 寄存器(reg)

用于保持数据值,直到被重写。例如:

```verilog
reg flag1, flag2;

```

#### 向量(Vector)

当位宽大于1时使用,wire和reg都可以声明为向量。类似编程语言中的数组。

例如:

```verilog
wire [31:0] gpio_data; // 声明32位线网变量gpio_data

```

### 其他数据类型

- **整数**(integer): 一般32位,直接使用`integer`声明
- **实数**(real): 默认值为0
- **时间**(time): 用于保存仿真时间,一般为64位。通过`$time`系统函数获取
- **数组**: 可以声明reg、wire、integer、time、real和向量等类型的数组

```verilog
wire  data_bit[7:0][5:0]; // 声明二维1位wire数组

```

### 存储器和字符串

#### 存储器(Memory)

Verilog中可以声明存储器,用于保存大量数据。存储器需要定义存储器类型、宽度和深度。

例如:

```verilog
reg [7:0] ram[0:255]; // 8位宽,256深度的寄存器型存储器

```

读取存储器使用中括号访问,写入使用赋值语句。

#### 字符串(String)

Verilog没有专门的字符串类型,可以使用reg或wire向量来表示字符串。

例如:

```verilog
reg [7:0] str [0:15]; // 16个8位寄存器组成的字符串

str = "Hello World"; // 初始化字符串

```

## Verilog速通代码示例

### 基本组成单元 - 模块(module)

一般形式:

```verilog
module 模块名(接口信号);

// 信号声明

// 功能描述

endmodule

```

注意:

- 模块名要有意义
- 一个.v文件中只能有一个模块

### 数据类型

常用的四种数据类型:

- reg:寄存器
- wire:线网
- parameter:参数
- integer:整数

### 数值表示

格式为:`<位宽><类型><数值>`

例如:`8'b1100_0010`

### 参数(parameter)

使用`parameter`定义常量。例如:

```verilog
parameter SIZE = 15;

```

`define`定义的宏可以跨模块使用,`localparam`仅在模块内可用。

### 变量

- wire
    - 用于模块间输入输出信号,电路连线
    - 例如:`wire [7:0] a;`
    - 使用`assign`进行连续赋值(阻塞赋值)
- reg
    - 代表寄存器
    - 必须在`always`块中使用,赋值需用非阻塞"`<=`"
    - 例如:`reg [7:0] a;`

运算符和C语言类似,这里不再赘述。

### 赋值语句

- 非阻塞赋值(如`b <= a;`):在块结束时才赋值
- 阻塞赋值(如`b = a;`):立即赋值

规范:

1. always块中使用非阻塞赋值
2. assign中使用阻塞赋值

### 块语句

- 顺序块:顺序执行语句
- 并行块:同时执行语句

示例:

```verilog
// 顺序块
begin
  语句1;
  语句2;
end

// 并行块
fork
  语句1;
  语句2;
end

```

### 条件和循环语句

- if...else语句、case语句
- for循环语句

### always块

在仿真中持续重复执行的语句块。

格式:`always @(控制信号) 语句`

例如:

```verilog
always @(posedge clock or posedge reset) // 时序逻辑

always @(*) // 组合逻辑

```

**按位运算符**

Verilog中包含以下按位运算符:

- 取反:~
- 与:&
- 或:|
- 异或:^
- 同或:~^

这些运算符对两个操作数的每1位进行逐位运算。

如果两个操作数位数不等,则用0在短操作数左侧进行填充。

### 连续赋值(Continuous Assignment)

用于对wire类型变量进行赋值。格式如下:

```verilog
assign <目标变量> = <表达式>;

```

例如:

```verilog
wire Cout, A, B;

assign Cout = A & B; // 实现A与B的按位与运算

```

### 门电路实现

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202307291900655.png)

## 《Verilog简明教程》读书笔记

- 模块之间并行执行
- `parameter`声明常量
- `testbench`是编写模块的高层测试模块
- `'timescale`定义时间单位和精度
- 数值表示:`5'O37` `4'D2`
- `wire`:
    - 声明:`wire [2:0] Start`
    - 赋值使用`assign`语句,例如`assign Start = Blt;`
    - 连续赋值,用于驱动wire变量
- `reg`:
    - 只能在`initial`和`always`块中赋值
    - `initial`只在开始时执行一次
    - `always`可反复执行
    - 时序控制,例如:`always #5 Clk=~Clk`
    - 事件触发,例如:`always @(posedge Clock)`
- 寄存器和存储器:
    - `reg [3:0] Sat;`
    - `reg [3:0] Mem [63:0]`
    - `reg Bog [1:5];`
- `reg`不能用`assign`赋值
- `#3`暂停3个时间单位
- `forever`实现永久循环

模块实例化示例:

```verilog
Gang3(Out[2],InA[2],InB[2]),
Gang3(Out[3],InA[3],InB[3]),

```

等价于:

```verilog
wire [3:0] Out,InA,InB;

```

- 关于模块的替换工作可以在书吴戈的<verilog简明教程>中的测试单元里找到相应的模块
