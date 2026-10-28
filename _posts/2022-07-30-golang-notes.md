---
layout: post
title: "Go语言学习笔记:数据类型、流程控制和其他基础"
date: 2022-07-30 12:00:00
description: >
  学习Go语言的笔记,内容涵盖了语言的基础知识点如数据类型、流程控制等,以及其他函数、方法等基础语法
categories: ["notes"]
math: true
---
## Go语言变量声明

### 基本格式

```go
1 package main
2
3 import "fmt"
4
5 func main() {
6     var a int
7     a = 1
8     fmt.Println(a)
9
10    f := "Runoob"
11    fmt.Println(f)
12 }

```

`:=` 这种写法非常省事,但是只能在函数内使用,一般用于for循环中声明循环条件。

```go
var (
   age int
   isOK bool
   myName string
)

```

这种因式分解关键字的写法一般用于声明全局变量,非常推荐全局变量这样声明,方便追加。

如果你想要交换两个变量的值,则可以简单地使用 `a, b = b, a`,两个变量的类型必须相同,应该类似于tuple交换了一下。

空白标识符 `_` 也叫做匿名变量,被用于抛弃值,如值 5 在 `_, b = 5, 7` 中被抛弃(原理就是占位符的作用,不分配内存,所以可以反复声明匿名变量)。

如果你声明了一个局部变量却没有在相同的代码块中使用它,同样会得到编译错误,但是全局变量就可以声明而不使用。

Go中用双引号`" "`来表明字符串,用单引号`' '`来表明单个字符(数字字符号字母汉字)。

```go
s1 := '1'
s2 := '我'
s3 := 's'

```

// 字节:1个字节=8Bit(8个二进制位)

// 一个字符'A' = 1个字节

// 一个utf8编码的汉字一般占3个字节 (比如‘沙’)

[学习一个](https://www.runoob.com/go/go-variables.html)

### 格式化输出

Go语言中有3种格式化输出的方法:`fmt.Println`、`fmt.Print` 和 `fmt.Printf`。

- `fmt.Println`会在输出内容的后面添加一个换行符
- `fmt.Print`只是简单的输出内容,不会添加任何字符
- `fmt.Printf`可以格式化输出,类似C语言中的printf

### fmt.Printf格式化占位符

`fmt.Printf`使用 `%`加上一个字母作为占位符,使用变量的值替换占位符实现格式化输出。

```go
name := "Runoob"
fmt.Printf("name:%s\\n", name) // %s是一个占位符,使用name变量的值替换占位符

```

常用占位符:

- %v 原样输出变量的值
- %T 输出变量的类型
- %s 输出字符串
- %d 输出十进制整数
- %b 输出二进制整数
- %o 输出八进制整数
- %x 输出十六进制整数
- %f 输出浮点数
- %t 输出true或false

### var与const的区别

- var声明的变量可以在程序运行时修改
- const声明的是常量,在程序运行时不能修改

### 伪随机数的使用

Go语言中的math/rand包实现了伪随机数生成器。

```go
import "math/rand"

// 随机种子
rand.Seed(time.Now().UnixNano())

// 生成随机数
rand.Intn(100)

```

使用rand.Seed()函数设置随机数种子,可以产生不同的随机数序列。

## if else 和 switch

### if else

Go语言中的if else语句与其他语言类似:

```go
if condition {
    // if代码块
} else {
   // else代码块
}

```

if语句可以在条件表达式前加上一个执行语句,再根据变量值进行判断:

```go
if a := 10; a > 5 {
    // if代码块
}

```

if还可以写成一行:

```go
if a > 5 { fmt.Println("a大于5") }

```

### switch

switch语句会将表达式的值与case语句进行匹配,匹配成功则执行该case语句块:

```go
switch expression {
    case value1:
       //语句
    case value2:
       //语句
    default:
       //默认语句
}

```

switch同样支持多表达式判断:

```go
switch age {
    case 10, 20, 30:
       fmt.Println("年轻人")
    case 40, 50, 60:
       fmt.Println("中年人")
    default:
       fmt.Println("老年人")
}

```

## Slice和Map

### Slice(切片)

切片(Slice)是对数组的抽象,对数组进行切片操作生成切片。

```go
// 声明切片
var a []int
a = make([]int, 3)

// 简化声明
a := []int{1, 2, 3}

```

切片可以进行追加操作,向切片追加新的元素:

```go
a = append(a, 4)

```

### Map(字典)

Map是一种无序的键值对集合,也称作关联数组或者字典。

```go
// 声明 map
var b map[string]string
b = make(map[string]string)

// 简化声明
b := map[string]string{"name": "zhangsan", "gender": "female"}

```

向字典增加键值对:

```go
b["age"] = "20"

```

从字典查询值:

```go
value := b["name"]

```


![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202307291900623.png)

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202307291900576.png)

## 指针(Pointer)

Go语言中的指针与C语言类似,用于存储变量的内存地址。

```go
a := []int{1, 2, 3}

var p *[]int = &a

(*p)[1] = 8

fmt.Println(a)

```

变量p存储了a的内存地址,可以通过`*p`来获取指针指向的变量。

对指针指向的变量进行操作如`(*p)[1] = 8`,会影响变量a的值。

字典也可以取地址操作:

```go
a := map[string]string{"name": "zhangsan", "gender": "female"}

var b *map[string]string = &a

(*b)["name"] = "lisi"

fmt.Println(a)

```

指针是Go语言中很重要的一个特性,正确使用指针可以减少内存拷贝提高程序效率。

## 自定义数据类型

在Go语言中可以使用`type`关键字定义自定义数据类型。

```go
type Person struct {
  Name string
  Age int
  Gender string
}

```

这样就创建了一个Person类型,并且有Name、Age、Gender三个字段。

可以通过`.`来访问结构体字段:

```go
var a Person
a.Name = "san"
a.Gender = "female"
a.Age = 15

fmt.Println(a)

```

也可以通过结构体指针来访问:

```go
a := new(Person)
a.Name = "san"
a.Gender = "female"
a.Age = 15

fmt.Println(*a)

```

`new`函数会返回一个结构体的指针。

自定义数据类型是Go语言中很重要的一个特征,可以提高代码复用性和可读性。

## Go语言循环遍历

Go语言中可以通过for循环遍历数组、切片、字符串、map等。

### 遍历map

使用for range遍历map:

```go
a := map[string]string{"name": "xiaopan", "gender": "male", "age": "20"}

for k, v := range a {
  fmt.Println(k, v)
}

```

这会遍历map的键值对。

### 遍历切片、数组

遍历切片和数组只需要值:

```go
a := []string{"abc", "xyz", "zzz"}

for v := range a {
  fmt.Println(v)
}

```

可以用下标i获取索引:

```go
a := []string{"abc", "xyz", "zzz"}

for i, v := range a {
  fmt.Println(i, v)
}

```

Go语言中for range循环可以帮助我们快速遍历数据,非常实用。

## Go语言常用命令简介

使用Go语言命令行工具前,需要配置好GOPATH等环境变量。

- GOPATH: Go代码、依赖包缓存目录,默认为$HOME/go
- GOBIN: go install安装的可执行文件目录,需要在PATH中

### 基本命令

- go run: 编译执行Go代码,适用于小程序
- go build: 编译Go代码生成可执行文件
- go install: 编译并安装可执行文件到GOBIN目录
- go get: 下载依赖包(现在被go install替代)
- go vet: 检查代码错误和提示
- go test: 运行测试用例

### 模块命令

- go mod init: 初始化模块, 创建go.mod文件
- go mod tidy: 处理依赖关系
- go mod graph: 查看依赖图

### 其他命令

- go help: 查看命令帮助
- go: 显示所有命令

## Go语言代码风格简介

Go语言有自己的代码风格规范

下面是一个示例程序,展示了一些Go语言的代码风格:

```go
package main

import "math/rand"

const MaxRand = 16

func StatRandomNumbers(numRands int) (int, int) {

  var a, b int

  for i := 0; i < numRands; i++ {

    if rand.Intn(MaxRand) < MaxRand/2 {
      a = a + 1
    } else {
      b++
    }

  }

  return a, b

}

func main() {

  var num = 100
  x, y := StatRandomNumbers(num)

  print("Result:", x, "+", y, "=", num, "?")

  println(x+y == num)

}

```

一些需要注意的规范:

- 大括号不能单独一行,必须放在代码块末尾
- 使用驼峰命名法命名变量、函数等
- 缩进使用空格,不要使用tab
- 注释符号//和代码间保留一个空格

Go语言的格式规范可以让代码更简洁规范,也便于阅读和维护。

## Go语言中的关键字和标识符

### 关键字

Go语言一共有25个关键字:

```
break        default      func         interface    select
case         defer        go           map          struct
chan         else         goto         package      switch
const        fallthrough  if           range        type
continue     for          import       return       var

```

这些关键字在Go语言中有特殊的含义,不能被自定义使用。

### 标识符

标识符用于命名变量、类型等,命名规则:

- 由字母、数字、下划线组成
- 不能以数字开头
- 区分大小写

`_` 是特殊的空标识符,用于占位丢弃值。

标识符根据首字母大小写可分为导出标识符(公有)和非导出标识符(私有):

- 大写字母开头的标识符可以被其他包访问(导出)
- 小写字母开头的不能被其他包访问(非导出)

正确使用关键字和标识符可以编写出合理、可读性好的Go语言代码。

## Go语言中的基本类型

Go语言提供了以下几种基本类型:

- 布尔类型:bool
- 数字类型:整型、浮点型、复数型
- 字符串类型:string

### 整型

常用的整型别名:

- byte 别名为 uint8
- rune 别名为 int32

### 浮点型

- float32 单精度浮点数
- float64 双精度浮点数

### 复数型

- complex64 复数的实部和虚部为32位浮点数
- complex128 复数的实部和虚部为64位浮点数

### 类型别名

类型别名是对一个类型的另一种命名。

### 具名类型和无名类型

- 具名类型:自定义的类型、泛型实例化类型等
- 无名类型:一般是组合类型

## Go语言中的值(Value)

值表示程序运行过程中的数据。

### 零值

每个值都有对应的零值。

- bool: false
- 数值类型:0
- string: ""
- 指针、通道、函数、切片等:nil

### 整型字面量

整型字面量有十进制、八进制、十六进制表示法。

可以使用_作为分隔符增强可读性。

### 浮点数字面量

浮点数字面量使用小数点表示。

### 字符串字面量

使用双引号或单引号表示字符串。

- 单引号会将值转义成rune类型
- 支持转义字符 \n、\t等

### 字符字面量

字符字面量用单引号 ' ' 表示。

支持转义字符表示特殊字符。

---

## 值的相关概念

### 值的大小

在Go语言中,可以通过unsafe包中的Sizeof函数获取值所占用的字节大小。

### 指针类型的基类型

如果一个指针的底层类型是*T,那么这个指针的基类型就是T表示的那个类型。

### 结构体类型的字段

结构体类型的字段是构成该结构体的各个成员。

例如:

```go
struct {
  Author string
  Title string
  Pages int
}

```

该结构体的字段有:Author、Title、Pages。

### 函数类型的签名

函数签名由函数的参数列表和返回值组成,不包含函数名和方法体。

### 类型的方法

方法是定义在类型上的函数。一个类型的所有方法构成该类型的方法集。

## Go语言中的常量和变量

### 常量

使用const关键字声明常量:

```go
const PI = 3.14

```

常量在编译时会进行自动补全,比如将3.14转换为3.140000。

### 变量

使用var关键字声明变量:

```go
var name string
name = "Golang"

```

也可以通过 := 同时声明并初始化变量:

```go
name := "Golang"

```

### 字面量默认类型

- 字符串字面量的默认类型是string
- 布尔字面量的默认类型是bool
- 整型字面量的默认类型是int
- 浮点数字面量的默认类型是float64

### 类型转换

可以通过T(v)语法进行显式类型转换。

## Go语言中的类型转换和常量

### 类型转换

Go语言中的类型转换比较严格:

- 只有兼容的类型可以相互转换,如int64到int
- 使用T(v)语法进行显式转换

一些类型转换示例:

```go
float32(3.14) // float64转float32

int(1.23) //错误,浮点数不能转成int

```

### 类型推断

Go语言编译器可以自动推断变量类型,这样可以省去显式声明类型。

主要通过 := 语法实现。

### 常量

使用const关键字声明常量:

```go
const PI = 3.14

```

- 常量在编译时会进行算术运算和自动补全
- const更像是“绑定”的语义,可以通过另一个常量引用已声明的常量

常量可以是包级常量或局部常量。

## Go语言常量补全和确定类型

### 类型确定的具名常量

我们可以为常量指定特定的类型:

```go
const X float32 = 3.14
const A, B int64 = -3, 5

```

### 常量声明中的自动补全

在常量声明中,如果不指定类型和值,那么会自动补全:

```go
const (
   X = 3.14
   Y
   A, B = "Go", "language"
)

```

上面代码在编译时会自动补全为:

```go
const (
   X float64 = 3.14
   Y float64 = 3.14
   A, B string = "Go", "language"
)

```

常量声明中的自动补全可以减少重复代码。

## Go语言中的变量声明

### 使用iota声明常量

iota是一个可以自动增长的整数常量。

在const关键字出现时将被重置为0,每新增一行常量声明将使iota计数一次。

利用iota可以简化定义枚举和量级的常量。

### 变量的声明

标准的变量声明:

```go
var name string = "Golang"

```

也可以让编译器自动推断类型:

```go
var website = "<https://golang.org>"

```

建议将变量声明放在一起:

```go
var (
  name string = "Golang"
  website string = "<https://golang.org>"
)

```

变量在首次使用前必须声明并初始化。

## Go语言中的赋值语句和作用域

### 纯赋值语句

Go语言不支持链式赋值,每条语句只能有一个赋值操作:

```go
x = 1 // 正确
x = y = 1 // 错误

```

常量在声明后不能被再次赋值修改。

### 短变量声明

使用 := 可以声明并初始化变量:

```go
name := "Golang" // 自动推断为string类型

```

这种方法更加简洁。

### 常量溢出

在编译时常量运算不会溢出,只有显式指定类型后才可能溢出。

### 作用域

变量和常量的作用域可以是包级别或函数内局部。

## Go语言中的运算符

Go语言支持以下几类运算符:

### 算术运算符

包括 `+`、`-`、`*`、`/`、`%`等基本算术运算符。

### 位运算符

包括 `&`、`|`、`^`、`<<`、`>>`等位运算符。

其中 `^` 为按位取反,`&^` 为按位清零。

### 比较运算符

包括 `==`、`!=`、`<`、`<=`、`>`、`>=`等比较运算符。

### 逻辑运算符

包括 `&&`、`||`、`!` 等逻辑运算符。

### 其他运算符

- 支持字符串连接:`+`
- 支持自增自减:`++`、`-`
- 不支持幂运算,使用math.Pow函数

注意移位运算结果为整数,在不同架构上移位会有不同。


## Go语言中的函数声明和调用

### 函数声明

标准的函数声明格式:

```go
func functionName(input1 type1, input2 type2) (output1 type1, output2 type2) {
  // 函数体
}

```

- 支持多个参数和返回值
- 返回值需要指定类型

返回值可以命名也可以匿名。

### 函数调用

调用格式为:

```go
output1, output2 := functionName(input1, input2)

```

调用后会进入一个退出阶段完成收尾工作。

### 匿名函数

使用函数字面量可以创建匿名函数:

```go
func(input1, input2) (output1, output2) {
  // ...
}

```

匿名函数可以作为闭包使用。

### 内置函数

Go语言内置了一些常用函数如println、print、new等。



## Go语言中的代码包和模块

### 包的引入

使用import关键字可以导入包:

```go
import "fmt"
import "math/rand"

```

还可以给包取别名:

```go
import f "fmt"

```

使用`.`可以匿名导入包。

### init函数

包可以包含一个或多个init函数,它们会在main函数执行前被调用。

### fmt.Printf占位符

- %v 输出值的默认格式
- %T 输出值类型
- %x 十六进制格式
- %s 字符串格式

### 模块

模块是相关包的集合,一个模块有自己的模块路径和版本。

使用go mod可以管理模块依赖。

合理使用包可以提高代码复用性,理解init函数的执行时机也很重要。

## Go语言中的表达式和语句

### 表达式

表达式代表一个值或多个值,常见的表达式有:

- 字面量、变量
- 常量
- 返回单个值的函数调用
- 通道接收操作(非赋值部分)

### 简单语句

简单语句在执行时相当于一个整体,主要包括:

- 变量简短声明
- 赋值语句
- 返回单值的函数调用
- 通道接收操作
- 自增自减语句

### 非简单语句

较复杂的语句不是简单语句,主要有:

- 标准变量声明
- 常量声明
- 类型声明
- 代码块
- 流程控制语句
- 函数声明
- 返回语句

### 语句

语句表示一个操作,通常由一个或多个子表达式或子语句构成。

## Go语言中的基本流程控制

Go语言中的基本流程控制语句包括:

### if-else 条件语句

```go
if 条件 {
  // 条件成立执行
} else {
  // 条件不成立执行
}

```

支持初始化语句,条件表达式必须返回布尔值。

### for 循环语句

```go
for 初始化语句; 条件表达式; 迭代语句 {
  // 循环体
}

```

支持 break 和 continue 语句进行跳转。

### switch-case 语句

```go
switch 初始化语句; 比较变量 {
  case 值1:
    // 语句
  case 值2:
    // 语句
  default:
    // 默认语句
}

```

case执行完毕会自动终止,不需要break。

### goto语句

可以无条件跳转,但不推荐使用。

## Go语言中的协程和同步技术

### 协程(goroutine)

协程是Go语言实现并发的核心方式。

使用go关键字可以启动一个新的协程执行函数:

```go
go func() {
  // 协程中的代码
}()

```

主协程退出时,程序也会退出。

### 并发同步

Go语言需要处理好并发中的同步问题:

- 避免数据竞争导致数据不一致
- 控制协程的启动、阻塞和解除阻塞

### WaitGroup

sync.WaitGroup可以用于同步协程:

- Add添加任务数
- Done表示任务完成
- Wait等待所有任务完成

通过协程和同步技术可以实现高效的并发编程。



## Go语言协程的状态和调度

### 协程状态

协程可以处于运行状态或阻塞状态:

- 运行状态:正在执行或等待系统调用返回
- 阻塞状态:被暂停执行

所有协程阻塞会导致死锁。

### 协程调度

Go运行时采用MPG模型调度协程:

- M - 系统线程
- P - 逻辑处理器
- G - 协程

调度规则:

- 每个P绑定一个G执行
- G可以被不同M调度执行
- GOMAXPROCS设置最大P数量

合理设置P的数量可以提高性能。

## Go语言中的延迟函数调用

### defer关键字

在函数中使用defer会将函数推迟到外层函数返回之后执行:

```go
defer func() {
  // 将最后执行
}()

```

defer类似栈操作,先进后出。

### 延迟调用规则

- defer延迟调用的参数会在声明时求值
- defer内的匿名函数参数在执行时求值

### 延迟调用修改返回值

延迟调用可以修改自己函数的返回值。

## Go语言中的panic和recover

Go语言中可以通过panic和recover实现类似异常的机制。

### panic函数

panic函数可以触发当前协程的恐慌状态:

```go
func panic(interface{})

```

panic会使程序进入异常状态,如果未处理会导致程序崩溃。

### recover函数

recover可以获取panic传递的值,并中止panic状态:

```go
func recover() interface{}

```

recover仅在延迟函数中有效。

### 用例

```go
defer func() {
  recover() // 捕获panic
  // 进行错误处理
}()

panic("error") // 触发panic

```

利用panic和recover可以实现错误处理,但是不是必须,也可以通过返回错误的方式。

## Go语言中的接口(Interface)

接口(Interface)是Go语言实现抽象和封装的主要方式。

### 接口定义

接口使用type定义:

```go
type Reader interface {
  Read(p []byte) (n int, err error)
}

```

接口包含方法签名的集合,不包含实现。

### 接口实现

一个类型通过实现接口中所有方法来实现接口:

```go
type File struct {}

func (f *File) Read(p []byte) (n int, err error) {
  // 方法实现
}

```

File实现了Reader接口。

### 接口值

接口值包含一个具体类型和具体值:

```go
var r Reader
r = &File{}

```

r包含具体类型*File和值f。

接口需要实现类型来提供值。接口值调用会调用具体类型的值的方法。
