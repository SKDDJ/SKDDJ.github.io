---
layout: post
title: "计算机操作系统"
date: 2023-09-20 12:00:00
description: >
  课程笔记
categories: ["notes"]
tags: ["计算机操作系统", "Operating System", "大三上"]
math: true
---
## 第一章：概述

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202308291710176.jpg)

### 1.1 操作系统概念引入
* 操作系统
	* 外部
		* 虚拟机
		* 用户环境
	* 内部
		* 作业管理
		* 资源管理


 
### 1.2 操作系统的主要功能

#### 1.2.1 用户接口

|OS提供给用户交互命令集合 | | |
|-- | -- | -- | 
| 用户操作的方式 |  |应用程序编程接口| 
| CLI(command line interface) |GUI(graphic user interface)  |API(application programming interface) | 

#### 1.2.2 处理机管理功能

|进程管理 | | | | 
|-- | -- | -- | -- |
| 控制 |调度  |同步| 通信 |
|controling | scheduling |synchronization | communication | 

#### 1.2.3 存储器管理功能
|内存管理 | | | | 
|-- | -- | -- | -- |
| 分配 |保护  |映射|扩展 |
|allocation |protection  |mapping |extension | 

#### 1.2.4 设备管理功能
|I/O管理 | | |  
|-- | -- | -- |
| 缓冲 |分配  |驱动| 
|buffering | allocation |driving |  

#### 1.2.5 文件管理功能
|文件管理 | | | | 
|-- | -- | -- | -- |
| 存储 | 结构  |读写|安全 |
|	storage | organization  |operation |security | 




### 1.3 操作系统的发展
### 1.4 多道与分时系统

#### 1.4.1 单道批处理系统
批处理： batch processing

Program A "Run" wait "Run" ->

主要特征：自动性、顺序性、单道性
#### 1.4.2 多道批处理系统
内存中存放多个作业运行
##### 1.4.2.1 优点：
1. 提高 CPU 利用率
2. 提高 I/O 利用率
3. 提高系统吞吐率


##### 1.4.2.2 需解决的问题
1. 作业管理： 组织作业运行
2. 处理机管理： 分配和控制 CPU
3. 存储器管理： 内存分配和回收
4. I/O 设备管理：I/O 设备的分配和操纵
5. 文件管理： 文件的存取、共享和保护

#### 1.4.3 分时系统 Time Sharing
时间片 time slice 
时间中断 time interupt
##### 1.4.3.1 个人电脑 Personal Computer

##### 1.4.3.2 分布式系统  Distributed System
* 支持分布式服务
* 系统之间数据共享
* 多处理器 SMP
* 异构性（CPU、GPU）
* 高可用、高可靠

###### 一、同时性 concurrency/parallelisim
并行：同一时刻，多个处理机
并发：同一时间间隔，单个处理机交替运行
###### 二、 共享
系统内资源供内存中并发程序使用
###### 三、 虚拟 Hypervisor
一个物理实体 -> 多个逻辑上的对应物

![企业级、云计算](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309051656188.jpg)

![个人用户](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309051657420.jpg)


**SOTA: Container**

![Docker、K8S](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309051657172.jpg)


**LibOS**

![LibOS](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309051658835.jpg)



###### 四、 不确定性
同一输入可能不同输出
1. 异步
2. 随机

### 1.5 实时系统及操作系统结构
### 1.6 操作系统的体系结构
#### 1.6.1 操作系统的基本特征
1. concurrency
2. sharing
3. virtualization
4. non-determinism

## 第二章：进程与调度

### 2.1 进程的描述与控制
#### 2.1.1 Concept
> 一个具有独立功能的程序在一个数据集合上的一次动态执行过程。

#### 2.1.2 Feature
1. 动态性
进程对应程序的执行
进程是动态产生，动态消亡的
2. 独立性
各进程的地址空间相互独立，除非采用进程间通信手段
3. 并发性
任何进程都可以同其他进程一起向前推进
4. 异步性
每个进程都以其相对独立的不可预知的速度向前推进
5. 结构化
进程 = 代码段 + 数据段 + PCB

#### 2.1.3 The Difference Between Process and Program
1. 进程是动态的，程序是静态的：程序是有序代码的集合；通常对应着文件、静态和可以复制。进程是程序的执行。
2. 进程是暂时的，程序是永久的：进程是一个状态变化的过程，程序可长久保存。
3. 进程与程序的组成不同：进程的组成包括程序、数据和PCB(进程控制块)。
4. 进程能真实地描述并发，而程序不能
5. 进程可创建其他进程，而程序不能
6. 同一程序同时运行于若干个数据集合上，它将属于若干个不同的进程$\to$一个程序可对应多个进程
7. 进程是资源申请和系统调度的基本单位

#### 2.1.4 Challenges
1. 空间开销（space overhead）
2. 时间开销（time overhead）
3. 控制复杂性（control complexity）


#### 2.1.5 Three States
1. 就绪态（Ready） ：一个进程已经具备运行条件，但由于无CPU暂时不能运行的状态。当调度给其CPU时，立即可以运行。位于“就绪队列”中
2. 执行态（Running） ：进程占有了包括CPU在内的全部资源，并在CPU上运行
3. 等待态（阻塞态，Waiting/Blocked）：进程因等待某种事件的发生而暂时不能运行的状态（即使CPU空闲，该进程也不可运行）。位于“等待队列”中

![三状态](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309062203172.jpg)

#### 2.1.6 Five States
Addition:
1. 新建状态

OS已完成为创建进程所必要的工作
已构造了进程标识符；已创建了管理进程所需的表格
但还没有允许执行该进程
OS所需的关于该进程的信息保存在主存的进程表中，但进程自身还未进入主存，也没有为与这个程序相关的数据分配空间，程序保留在辅存中。

2. 退出状态

它不再有执行资格
表格和其它信息暂时由辅助程序保留

![五状态](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309062205976.jpg)

#### 2.1.7 Swapping & Suspend
> Problems:
> 1. 主存中同时有多个进程
> 2. I/O速度比计算速度慢很多 
> 3. 其他作业因没有主存空间不能投入运行

* 交换（Swapping）
	* 挂起（Suspend）：把进程从内存转到外存
	* 激活（Activate/Resume）：把进程从外存转到内存
* 那么古尔丹，代价是什么：I/O 操作比较耗时

![具有挂起状态的进程状态图](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309062209418.jpg)

##### 2.1.7.1 双挂起
1. 就绪(Ready)：进程在内存且可立即进入运行状态（活动就绪）；
2. 阻塞(Blocked)：进程在内存，并等待某事件的出现（活动阻塞）；
3. 阻塞 / 挂起（Blocked, suspend）：进程在外存并等待某事件的出现；
4. 就绪 / 挂起（Ready, suspend）：进程在外存，但只要进入内存，即可运行；
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309062210404.jpg)

![实际Linux 系统](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309062211241.jpg)


### 2.2 进程调度

#### 2.2.1 内核功能 Kernel Function
> 一些与硬件紧密相关的模块或运行频率较高的模块，公用基本操作模块等常驻内存，便于提高操作系统运行效能的软件，称为操作系统的内核。


1. 进程管理：创建、撤消、调度、控制
2. 存储管理：分配或回收空间、虚拟存储管理等。
3. I/O设备管理：设备、通道的分配和回收、设备的管理、虚拟设备的实现等。
4. 中断处理：操作系统的重要活动都依赖于中断。

#### 2.2.2 原语 Primitive
由若干机器指令构成用以完成特定功能的一段程序，并在执行中不可分割的
操作系统内核的功能大都通过执行各种原语实现
原子操作
在一个操作中的所有动作，要么全做，要么全不做
All-or-None

#### 2.2.3 PCB(Process Control Block)
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309071635913.jpg)
进程控制块的信息：
* 进程标识符 pid
惟一地标识一个进程：为每一个进程赋予一个惟一的数字标识符，方便系统使用。
* 父进程 ppid
* 用户 uid
##### 2.2.3.1 进程控制块的组织方式
* 链接
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309071637511.jpg)
* 索引
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309071639732.jpg)


##### 2.2.3.2 Linux task_struct (partial)s
```c
struct task_struct {
  /* these are hardcoded - don't touch */
  /*-1 unrunnable, 0 runnable, >0 stopped */
  volatile long        state; 
  long                 priority;
  /* per process flags */
  unsigned             long flags; 
  int errno;
  struct task_struct   *next_task, *prev_task;
  struct task_struct   *next_run,  *prev_run;
  pid_t                pid;
  /* memory management info */
  struct mm_struct     *mm;
  /* signal handlers */
  struct signal_struct *sig;
};
```


##### 2.2.3.3 进程在内存中的样子
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309071641876.jpg)

##### 2.2.3.4 homework1
Linux内核有list.h，理解其设计原理，体会其设计思想
实现一个简单的进程管理程序。使用 list.h 维护不同状态的进程。


##### 2.2.3.5 进程组织
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309071643462.jpg)

解释了为什么使用 ssh 连接远程服务器执行命令后退出 ssh 连接，会话内的进程会被 kill，因为所有会话中的父命令是 sshd

##### 2.2.3.6 进程的创建流程

* 进程的创建
	* 申请空白PCB（process control block）
	* 为新进程分配资源（内存、文件等）
	* 初始化PCB数据结构
	* 将新进程插入就绪队列
* 创建新进程后
	* 父进程与子进程并发执行
	* 父进程等待，直到某个或者全部子进程执行完毕。

#### 2.2.4 进程控制相关 API
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309071647392.jpg)

##### 2.2.4.1 关于 fork()-创建新进程
- 调用格式： pid = fork()
- 在调用fork之后，父进程和子进程均在下一条语句上继续运行。
- 父、子进程的fork返回值不同
	- 失败：返回 -1
	- 在子进程中返回时，pid为0；
	- 在父进程中返回时，pid为所创建的子进程pid

两个关键点：

1. 运行顺序

父子进程的运行是无关的，运行顺序也不固定。
若要求父子进程运行顺序一定，则要用到进程间通信。

2. 数据共享

除了子进程标识符和其PCB结构中的某些特性参数不同之外，子进程是父进程的精确复制。

**调用 fork() 的例子**
```c
#include<stdio.h>
#include<sys/types.h>
#include<unistd.h>
int global = 4;
void main(void) {
  int pid; 
  int local = 5;
  printf(“before fork\n”); if ((pid = fork()) < 0) {
  printf(“fork error\n”);
  exit(0);
} else if (pid == 0) {
  global++;
  local--;
}
printf(“global=%d,
        local=%d\n”,
        global, local);
}
```
父进程输出:
global=4, local=5

子进程输出:
global=5, local=4

原因就是fork后变量值的独立性,子进程中的修改不会影响父进程中的同名变量。


##### 2.2.4.2 写时拷贝
* COW：copy-on-write
* 共享：精确拷贝
* 修改：创建新的memory map
	* OS自动完成，用户透明
* 例外
	* 文件句柄

##### 2.2.4.3 exec()-执行一个文件的调用
* 子进程如何执行一个新的程序？
	* 通过exec() 调用族，加载新的程序文件
* 子进程可以拥有自己的可执行代码，即用一个新进程覆盖调用进程。
* 参数包括新进程对应的文件和命令行参数
	* 成功调用时，不再返回；
	* 否则，返回出错原因。

> 在大多数程序中，系统调用fork和exec是结合在一起使用的。父进程生成一个子进程，然后通过调用exec覆盖该子进程

![本例若exec 执行成功则不会打印 ending](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309071657740.jpg)

![InterestingQuestion](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309071659846.jpg)
> "else { global += 2; }" is a pit. It won't be executed.

#### 2.2.5 进程的终止

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309071801646.jpg)

进程的终止过程：

检索PCB，检查进程状态；

执行态$\to$中止；

有无子孙需终止；

归还资源给其父进程或系统；

从PCB队列中移出PCB。

![UNIX进程终止](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309072211069.jpg)

#### 2.2.6 waitpid() 

![example](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309141657202.jpg)
由于这个进程由当前会话创建，所以返回值 5 会在最后返回
![output](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309141658216.jpg)

#### 2.2.7 进程切换
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309141707711.jpg)

#### 2.2.8 Linux 中的系统调用过程

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309141708440.jpg)


### 2.3 线程
recap：

two features of process:
1. 资源所有权：一个进程包括一个保存进程映像的虚地址空间，并且不时地被分配给对资源的控制或所有权
2. 调度/执行：一个具有执行状态和调度优先级的进程是一个被操作系统调度并分配的实体

> 为区分这两个特点，调度并分派的部分通常称为线程或轻量级进程（light-weight process），而资源所有权的部分通常称为进程。

#### 2.3.1 线程的优势
1. 减少并发执行时的时空开销
进程的创建、撤消、切换开销较大
2. 线程是系统独立调度的基本单位
基本不拥有系统资源，只有少量资源（PC，寄存器，栈），**共享其所属进程所拥有的全部资源。**

> 线程阻塞不一定会引起进程阻塞

#### 2.3.2 线程数据

* 状态参数
	* 寄存器状态
	* 堆栈
	* 优先级
	* 线程专有存储器
		* TLS：Thread Local Storage
	* 信号屏蔽
	* 运行状态

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309141715455.jpg)


#### 2.3.3 线程状态
1. 派生（Spawn)：当产生一个新进程时，同时也为该进程派生了一个线程，随后，可以在同一个进程中派生另一个线程，新线程被放置在就绪队列中。
2. 结束（Finish）：线程完成时，其寄存器信息和栈都被释放。
3. 就绪（Ready）
4. 运行（Running）
5. 阻塞（Blocked)：当线程需要等待一个事件时，它将阻塞，此时处理器转而执行另一个就绪线程。

#### 2.3.4 内核线程和用户线程的不同
1. 调度开销
* 内核级线程切换类似于进程切换，开销较大。
* 用户级线程切换发生在同一用户进程内，无需进入内核，更快。
2. 并发效率
* 用户线程：某一个线程阻塞，由于内核不知道这些线程的存在，因此将进程阻塞。
* 内核线程：某一线程阻塞，则阻塞该线程，进程（其它线程）仍可运行。
3. 执行时间
* 用户级线程以进程为单位平均分配时间，对线程间并发执行不利（一个CPU）。
* 内核级线程以线程为单位分配时间（多个CPU）。

#### 2.3.5 线程实例（以 Linux 为例）
```c
#define NUM_THREADS     5

void *PrintHello(void *threadid)
{
   long tid;
   tid = (long)threadid;
   printf("Hello World! It's me, thread #%ld!\n", tid);
   pthread_exit(NULL);
}
```

```c
int main (int argc, char *argv[])
{
   pthread_t threads[NUM_THREADS];
   int rc;
   long t;
   for(t=0; t<NUM_THREADS; t++){
      printf("In main: creating thread %ld\n", t);
      rc = pthread_create(&threads[t], NULL, PrintHello, (void *)t);
      if (rc) {
        printf("ERROR; return code from pthread_create() is %d\n", rc);
        exit(-1);
      }
   }

   /* Last thing that main() should do */
   pthread_exit(NULL);
}

```

这里有一个 trick，为了传入线程的 id 同时保证能够在线程函数中重新定义变量类型，将线程 id 当成引用`(void *)t` 传入进去来“欺骗”编译器。

##### 课后练习：
> 阅读了解.NET Task异步工作机制，思考其与线程的关系


### 2.4 处理机调度
#### 2.4.1 调度方式
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309231739012.jpg)

三种调度的触发事件
* 长程：任务创建
* 中程：交换
* 短程：时间片/事件发生/抢占

#### 2.4.2 单处理机调度
![三级调度](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309231741618.jpg)

#### 2.4.3 调度原则
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309231742772.jpg)

#### 2.4.4 调度算法

##### 2.4.4.1 FCFS
先来先服务——FCFS(First-Come-First-Served)
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309231744510.jpg)
评价
* 非抢占调度
* 对长进程有利，不利于短进程
* 适合CPU繁忙型进程，不适合I/O繁忙型进程（系统角度）
* **不能直接用于分时系统**
* 往往与其它调度算法综合使用

##### 2.4.4.2 SJF 
最短作业优先——SJF(Shortest Job First)
1. 非剥夺，当前进程结束后，选择所需处理时间最短的进程。
2. 如果两个进程剩余时间相同，则使用FCFS来调度。

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309231746915.jpg)

评价
* 有利于短进程，提高了平均周转时间
* 长进程可能被饿死（starvation）
* 需要知道或估计每个进程的处理时间

##### 2.4.4.3 RR
轮转调度——RR(Round Robin)
1. 时间片调度(time slicing)：以一定的时间间隔周期性产生时钟中断，当前正在运行的进程被置于就绪队列尾，然后基于FCFS选择下一个就绪进程运行。
2. 时间片的长度从几ms~几百ms
3. 专门为分时系统设计

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309231748909.jpg)
时间片长度变化的影响
* 过长：退化为FCFS，进程在一个时间片内执行完
* 过短：用户的一次请求需要多个时间片才能处理完，上下文切换次数增加

评价
* 相对公平
* 偏向于CPU型的进程
* 中断开销

##### 2.4.4.4 SRT
最短剩余时间调度——SRT(Shortest Remaining Time)

1. 对SJF增加了剥夺机制
2. 选择预期剩余时间最短的进程，当一个新进程加入就绪队列时，它可能比当前运行的进程具有更短的剩余时间

##### 2.4.4.5 基于优先权/级的调度算法
* 优先级
	* 每个进程设有一个优先级，调度程序选择具有较高优先级的进程。
* 静态优先级(static)
	* 优先数在进程创建时分配，生存期内不变。
	* 响应速度慢，开销小。
	* 适合批处理进程
* 动态优先级(dynamic)
	* 进程创建时继承优先级，生存期内可以修改。
	* 响应速度快，开销大。

##### 2.4.4.6 HRRN
高响应比优先算法——HRRN(Highest Response Ratio Next)

1. 非抢占式
2. 响应比R  R＝周转时间/服务时间=(w＋s)/s 

w＝等待时间, s＝服务时间


#### 2.4.5 实时调度
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309231756345.jpg)

##### 2.4.5.1 LLF
LLF : Least Laxity First

松弛度 = 完成截止时间 - 当前时间 - 剩余执行时间

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309231757492.jpg)
类似 RR

#### 2.4.6 多处理机调度

##### 2.4.6.1 SQMS(Single Queue Multi Scheduling)
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309231759580.jpg)

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309231800977.jpg)

##### 2.4.6.2 MQMS(Multiple Queues Multi Scheduling)

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309231801813.jpg)
问题： 负载均衡 load imbalance

解决方案： Migration & Work Stealing

##### 2.4.6.3 成组调度——Gang scheduling
优点：
* 对相互合作的进（线）程组调度，可以减小切换，减小系统开销。
* 每次分配一组CPU，减少了调度频率。

##### 2.4.6.4 专用处理机分配——Dedicated Processor Assignment

* 特点：每个进（线）程专用处理机，使其切换小，提高效率。
* 主要用于大型计算，实时系统

Sony PlayStation 3 (PPU/SPU) $\to$ CELL
神威太湖之光：众核（4+256)

### 2.5 进程并发
#### 2.5.1 进程并发控制：互斥(mutual exclusion)与同步(synchronization)

> 1. 异步性
> 2. 独占性
> 3. 协作完成

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309231807130.jpg)

### 2.6 进程、死锁与饥饿
#### 2.6.1 忙等、饥饿、死锁
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309231808671.jpg)

##### 2.6.1.1 活锁（livelock）
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309231808029.jpg)

#### 2.6.2 Dekker's algorithm
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309271938692.jpg)

#### 2.6.3 Peterson's algorithm
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309271939542.jpg)

#### 2.6.4 硬件方法

* 硬件方法
	* 屏蔽中断
	* 机器指令
		* Test & Set
		* Exchange
> 原子性：all or nothing
##### 2.6.4.1 Test & Set

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309271943372.jpg)

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309271946187.jpg)

##### 2.6.4.2 Exchange
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309271946906.jpg)

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309271948489.jpg)

#### 2.6.5 信号量(Semaphore)
> 原理： 多进程通过信号传递协调工作，根据信号指示停止执行（阻塞等待）或者向前推进（唤醒）

* 信号： 信号量 s
	* +: 资源数量
	* -: 排队数量

* 原语：
	* wait(s): 等待信号，并占有资源
	* signal(s): 释放资源，并激发信号

##### 2.6.5.1 整数型信号量
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309271952246.jpg)

##### 2.6.5.2 记录型信号量

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309271954336.jpg)

#### 2.6.6 管程 Monitor
> 共享资源用共享数据结构表示，资源管理程序用对该数据结构进行操作的一组过程来表示

管程的特点：
* 模块化（Modularization）
	* 管程是一个基本程序单位，可以单独编译; 
* 抽象数据类型（Abstraction)
	* 管程中不仅有数据，而且有对数据的操作; 
* 信息隐藏（Encapsulation）
	* 管程外可以调用管程内部定义的函数，但函数具体实现外部不可见; 
	* 局部数据变量只能被管程的过程访问，任何外部过程都不能访问。

在任何时候，只能有一个进程在管程中执行。
> 条件变量提供同步支持（非默认锁）。条件变量包含在管程中，并且只有在管程中才能被访问：
> * cwait(x)：调用进程的执行在条件x上挂起，管程现在可被另一进程使用。
> * csignal(x)：恢复阻塞在x上的进程。

条件变量不完全等同 “信号量”

csignal(x)时，如果等待x的队列为空，则信号无任何作用（丢失），而信号量会保留其值

#### 2.6.7 信号量的应用
##### 2.6.7.1 信号量类型
* 互斥信号量
	* mutex
	* binary semaphore
* 资源信号量
	* general semaphore
	* counting semaphore
##### 2.6.7.2 图书馆问题
图书馆有N个座位，一张登记表，要求：
- 读者进入时需先登记，取得座位号；
- 出来时注销
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310152139313.jpg)

##### 2.6.7.3 公交车场景
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310152140166.jpg)

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310152141457.jpg)

#### 2.6.8 经典同步问题

##### 2.6.8.1 生产者/消费者问题
- 生产者：满则等待，空则填充
- 消费者：空则等待，有则获取
- 不允许同时进入缓冲区

1. 无限缓冲（Infinite Buffer）

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310152143241.jpg)

方案
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310152143431.jpg)
 
 2. 有限循环/环形缓冲区

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310152145681.jpg)

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310152146906.jpg)


3. 有限循环P/V操作
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310152147194.jpg)

##### 案例
有3个进程PA，PB和PC合作解决文件打印问题：
- PA将文件记录从磁盘读入主存的缓冲区1，每执行一次读一个记录;
- PB将缓冲区1的内容复制到缓冲区2，每执行一次复制一个记录；
- PC将缓冲区2的内容打印出来，每执行一次打印一个记录。缓冲区的大小等于一个记录大小。

请用P，V操作来保证文件的正确打印。

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310152153410.jpg)

**sem**
1. empty1，empty2：分别表示缓冲区1及缓冲区2是否为空，初值为1。
2. full1，full2：分别表示缓冲区1及缓冲区2是否有记录可供处理，初值为0。
3. mutex1，mutex2：分别表示缓冲区1及缓冲区2的访问控制，初值为1。

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310152154737.jpg)

##### 2.6.8.2 读者/写者问题 Readers-Writers Problem
- 三个角色
	- 一个共享的数据区；
	- Reader: 只读取这个数据区的进程；
	- Write: 只往数据区中写数据的进程；
- 三个条件
	- 多个Reader可同时读数据区；
	- 一次只有一个Writer可以往数据区写；
	- 数据区不允许同时读写。

1. 读者优先
> 允许读者插队

**信号量**
- wsem：互斥信号量，用于Writers互斥Writers和Readers，以及第一个Reader互斥Writers
- readcount：统计同时读数据的Readers个数
- mutex：对变量readcount互斥算术操作

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310152157502.jpg)

2. 写者优先

**新增信号量**
- rsem：信号量，当至少有一个写者申请写数据时互斥新的读者进入读数据
- writecount：用于控制rsem信号量
- mwc：信号量，控制对writecount的互斥加减操作

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310152200197.jpg)

> P(z)多此一举

##### 2.6.8.3 理发师问题 Sleeping Barber Problem 
- 角色和资源
	- 一个理发师
	- 一个理发椅
	- 一排座位
	- 随机到来的客户
- 场景
	- 理发师：有客干活，无客睡觉
	- 客户：唤醒理发师，有位等待，无位离开

**信号量**
```c
/* # of customers waiting */
semaphore customers = 0; 
/* barber status */
semaphore barbers = 0;          
/* mutual exclusion to access seats */
semaphore mutex = 1;            
/* # of available seats. */
int nas = N;  
```


![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310152210282.jpg)

##### 2.6.8.4 哲学家就餐问题 Dinning Philosopher Problem
- 5个哲学家围坐一张餐桌
- 5只餐叉（筷子）间隔摆放
- 思考或进餐
- 进餐时必须同时拿到两边的餐叉
- 思考时将餐叉放回原处
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310152210254.jpg)

**服务生方法 Conductor/Waiter Solution**
> 最多允许4个哲学家同时进食

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310152225199.jpg)

**资源分级方案1 Resource hierarchy solution**
- 为资源（餐叉）分配一个偏序（partial order）或者分级（hierarchy）的关系，所有资源都按此顺序获取，按相反顺序释放。
- 给哲学家编号，奇数号的哲学家必须首先拿左边的筷子，偶数号的哲学家则反之。
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310152227591.jpg)
**普通方案**
为了避免死锁，把哲学家分为三种状态：
1. 思考
2. 饥饿
3. 进食

如果取筷子，每次要么拿到两只筷子，要么一只不拿。

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310152228458.jpg)

```c
void test(int i) 
{
  if (state[i] == HUNGRY && 
      state[LEFT] != EATING && 
      state[RIGHT] != EATING) {
    state[i] = EATING;
    V(s[i]);
  }
}
```

### 2.7 进程间通信 Inter Process Communication: IPC

进程通信分为两类：
1. 低级通信：以信号量作为通信工具，交换的信息量少。
2. 高级通信：操作系统所提供的一组通信命令，高效地传送大量数据。 
	1.  共享存储（Shared Memory）
	2. 消息传递/消息队列（Message Passing/Message Queue）
	3. 管道（Pipe）
	4. 套接字（Socket）
	5. 文件（File）
	6. 信号（Signal）
	7. 内存映射文件（Memory Mapped File）

#### 2.7.1 共享存储（Shared Memory） 
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310152301168.jpg)

#### 2.7.2 消息传递（Message Passing）
通信模式
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310152302945.jpg)

#### 2.7.3 消息缓冲队列通信机制 
消息缓冲队列通信机制中的数据结构 
```c
type message_buffer record
     sender；//发送者进程标识符
     size；//消息长度
     text；//消息正文
     next；//指针
 end 
 
type PCB record
    mq；//消息队列队首指针
 mutex；//消息队列互斥信号量
    sm；//消息队列资源信号量
    ……
end
```

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310152304929.jpg)

#### 2.7.4 管道（Pipe）通信

- 用于连接一个读进程和一个写进程以实现他们之间通信的共享文件，又名pipe文件。
- 无名管道（unnamed pipe）
	- $ ls | grep x
- 命名管道（named pipe）
	- $ mkfifo mypipe

##### 2.7.4.1 Shell 中的无名管道
```shell
$ ls –l | more
```

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310152306847.jpg)

### 2.8 死锁避免

#### 2.8.1 银行家算法

[img](question)

#### 2.8.2 资源分配算法
* 不安全序列

#### 2.8.3 死锁定理
* 资源状态图 （ 简化）




## 第三章：存储管理
### 操作系统的存储管理需求分析
### 存储划分技术：分区技术
### 伙伴系统
### 存储划分技术：简单分页技术
### 存储划分技术：简单分段技术
### 虚拟存储管理的软件策略
### 页面置换算法
### 虚拟存储管理的页面清除与负载控制策略
## 第四章：I/O设备管理
### 设备管理概述与I/O控制方式
### I/O缓冲技术
### 磁盘调度策略
### 磁盘容错技术
### 磁盘阵列RAID技术
## 第五章：文件管理
### 文件管理概述
### 文件的逻辑结构与访问方式
### 文件目录管理、文件共享和记录组块方式
### 文件的物理组织和外存空闲空间管理
