---
layout: post
title: "概率论与数理统计"
date: 2022-12-24 12:00:00
description: >
  简要介绍了概率论与数理统计的基础知识。第一章讨论了随机事件及其概率、条件概率、全概率公式、贝叶斯公式和独立性等内容。第二章则介绍了...
categories: ["notes"]
tags: ["概率论与数理统计", "大二上"]
math: true
---
## 第一章 随机事件与概率

---

### case1 事件运算及概率

#### 1.1 随机试验与随机事件

样本空间:所有可能的结果的集合,记为Ω

样本点:样本空间中的元素

基本事件:是集合,仅在样本空间中单个结果的事件

#### 随机事件的关系及运算

1. 包含关系
2. 和事件
3. 积事件
4. 互不相容事件
5. 对立事件(逆事件)实际就是补集的概念
6. 差事件 A-B

- A-B = AB-hat = A-AB = A∪B - B

1. 随机事件(集合)运算律:

- 交换律:A∪B = B∪A , A∩B = B∩A
- 结合律:括号可以随意调整
- 分配律:去掉括号,再分配
- 德摩根律:去掉hat时长变短开口换方向
- 吸收律:...

---

### case2 概率性质

#### 概率(Probability)

客观存在的常量

#### 频率

定义:在相同条件下,进行n次实验,其中出现m次某结果,

这个比值叫做频率(m/n)

性质:稳定性

#### 古典概率

#### 古典概型试验

- 仅有__有限多个__基本事件
- 每个基本事件发生的__可能性相等__

#### 概率的公理化定义

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241344268.png)

#### 由公理化定义可以得到很多重要性质:

1. 不可能事件的概率为0,即$P(\phi)=0$ #逆命题不真
2. 有限可加性
3. 对立事件概率和为1,$P(A)+P(A_hat)=1$
4. 概率单调性

#### 概率加法定理

又名 多除少补原理

$P\left(A_1\cup A_2\cup\ldots\cup A_n\right)=\sum_{i=1}^n P\left(A_n\right)-\sum_{1\leq i<j\leq n}P\left(A_i A_j\right)+\sum_{1\leq i<j<k\leq n}P\left(A_i A_j A_k\right)-\ldots+(-1)^{n-1}P\left(A_1 A_2\ldots A_n\right)$

#### 做题过程

- 定义事件ABC...
- 交代是什么问题(e.g. 这是个古典概型问题)
- Attention:摸球分类模型不需要过程,直接算就行(超几何分布适用)

---

### case3 条件概率

条件概率满足概率定义的三个公理

#### 全概率公式

内容：如果事件$B1、B2、B3…Bi$构成一个[完备事件组](https://baike.baidu.com/item/%E5%AE%8C%E5%A4%87%E4%BA%8B%E4%BB%B6%E7%BB%84/6451190?fromModule=lemma_inlink)，即它们两两互不相容，其和为全集；并且$P(Bi)$大于0，则对任一事件A有

$$
P(A)=P(A|B1)P(B1) + P(A|B2)P(B2) + ... + P(A|Bi)P(Bi)
$$

#### 贝叶斯公式

用来解决***事后问题***,结果已经发生,求哪个原因导致的

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241346990.png)

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241347006.png)

#### 独立的定义和证明

$P(AB)=P(A)P(B)$

#### 三个相互独立的证明:

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241347058.png)

---

## 第二章 随机变量及其分布

![image-20221224135157803](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241351878.png)

#### 随机变量的定义

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241352318.png)

#### 随机变量

实际也是个函数,至少我觉得

事件E的样本空间为$\omega$,对于每一个样本点$\omega$∈$\omega$,都有一个唯一的实数x($\omega$)与之对应,那么x就是随机变量,是个可测函数,挺好用的,找个实数对应

#### 分布函数

设X是一个随机变量,x是任意的实数,称函数

F(x) = P{X<=x} = P{$\omega$: X($\omega$) <= x}

为随机变量X的分布函数

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241352465.png)

#### 分布函数三条性质:

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241352667.png)

最后讲**混合型随机变量**，一个陀螺，一半刻1，一半刻0-1连续的数字，落地数字的分布律，要证明分布函数既不连续也不离散：

不连续，因为图像不连续，由连续型随机变量分布函数的逆否命题可得，不离散，因为图像不是阶梯形

#### 六个常见的离散型随机变量分布：

- 几何分布 k次实验才成功的概率(也就是前面k-1次都失败了)
- 超几何分布 不放回，用A排列去算(抽球)
- 负二项分布（帕斯卡分布）eg n次成功前失败x的次数分布

  - 可以看成几何分布的推广(很多个几何分布加起来)
- 二项分布（超几何分布的极限情况，样本空间足够大）
- 两点分布 (伯努利分布,就是二项分布的n=1时的情况)
- 柏松分布（小概率事件发生的次数）

#### 三个连续型随机变量

- 均匀分布
- 指数分布
- 正态分布

---

### case1 离散型随机变量

remember 超几何分布(不放回)的极限条件就是二项分布

### 独立重复实验

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241353321.png)

### 伯努利概型

![image-20221224135403194](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241354330.png)

### 几何分布

![image-20221224135412126](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241354236.png)

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241354236.png)

这个性质个人理解就是每个事件相互独立互不影响,因此就没有所谓的"后效性"

### 泊松分布

后面有详细介绍（五种重要分布那章）

---

### case2 一维随机变量

#### 离散型随机变量

- 分布律,分布函数
- 函数的分布

#### 连续性随机变量

- 概率密度,分布函数(必考)
- 函数的分布

#### 离散型随机变量*分布律,分布函数*

##### 分布律

#### $例一:抽球,6个球,4白2黑,随机抽两个,求(1)抽到白球X的分布律 (2)随机变量X的分布函数$

$例二:给出随机变量X的分布函数,求X的分布律和P{-1 < X <= 3}$

##### 函数的分布

例一$给出随机变量X的分布律,求U=X- 1的分布律,W=X^2的分布律$

这个很简单,合并同类项就可以了

#### 连续型随机变量的*概率密度,分布函数*

$例一:给出连续型随机变量X的概率密度函数f(x),求里面的常数,P(X>=0.5),分布函数F(x)$

需要知道概率密度f(x)的性质有:

- 归一性:从-∞到+∞积分是1
- $F(x)=P\{X\leq x\}=\int_{-\infty}^{x}f(x)dx$
- ****$P\{a\leq X\leq b\}=F(b)- F(a)=\int_{a}^{b}f(x)dx$

$例二:给出连续型随机变量的分布函数F(x)=A+Barctanx,-∞<x<+∞,求:系数AB,P{-1<X<1},X的概率密度f(x)$

需要知道分布函数的性质:

- F(x) = P{X<x}
- 0 <= F(x) <= 1
- F'(x) = f(x)
- 右连续
- 归一性：在定义域范围内积分后得到1

P{X =x_0} = 0 ,这也可以推出一个好玩的事实：

即概率为零不一定是不可能事件，因为连续型概率密度上每个点的概率都是0，但是也有可能发生。

因此，求开区间，闭区间，半开半闭区间上的分布函数最后得到的都一样

补充一道题目：

证明标准正态分布的函数是概率密度函数

（1）非负性       这玩意不用证明，一眼定真

（2）归一性       这玩意没法直接积分，需要先平方化成二重积分，再换元转换极坐标，然后积分

---

### case3 五种重要分布

#### 离散型

- 二项分布
- 泊松分布

#### 连续型

- 均匀分布
- 指数分布
- 正态分布

1. **离散型\--二项分布**

记作:$X~b(n,p)分布律:P{X=k}=C^k_np^k(1-p)^(n-k)$ ------n是样本个数,p是发生概率

> 例一:5台机器,每台使用相互独立,每台同时被使用概率为0.1,问:(1)恰有两台被使用概率(2)至少有两台被使用

2. **离散型\--泊松分布**

记作:$X~\pi(\lambda)$ 分布律:$P(X=k)=\frac{\lambda^k}{k!}e^{-\lambda},k=0,1,\cdots$

计算小概率事件就用泊松分布

泊松与二项之间的关系:通常$n\geq 20,p\leq 0.05$时就可以用泊松分布近似计算了

泊松中的$\lambda=np$,事实上泊松由二项推导出来

3. **连续型\--均匀分布（Uniform）**

记作:$X\sim U(a,b)$
概率密度:

$f(x)=\frac{1}{b-a},\quad a<x<b$

$f(x)=0$, else

应用：计算机上面的伪随机数一般用均匀分布生成

4. **连续型\--指数分布（Exponent）**

记作:$X E(λ)$ 概率密度:

$f(x)=\lambda e^{-\lambda x},\quad x>0$

$ f(x) = 0 , x \leqslant0$

没有分布函数，该补充

指数函数的无记忆性:

$P\{X>s+t|X>s\}=P\{X>t\},\quad P\{X>s\}>0$

其中 $X$ 是一个随机变量，$s$ 和 $t$ 是实数。

举个简单的例子便于理解:

一个灯泡用了s个小时,求再用t 小时报废的概率,和从0开始计时, 用了t小时报废的概率相同

5. **连续型\--正态分布（Gauss）**

记作:$X~N(μ,σ^2)$ ,

概率密度: $f(x)=\frac{1}{\sqrt{2\pi}σ}e^{-\frac{x-μ^2}{2σ^2}$

$f(x)=\frac{1}{\sqrt{2\pi} \sigma} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$

标准正态分布：X～N（0，1）

**特征**：

- 归一性：不必多说
- 曲线关于$x = \mu $对称
- 最大值$ \frac{1}{\sigma \sqrt{2\pi }}$在$ x = \mu $ 处取得

##### 正态分布概率的计算

关于正态分布的分布函数：用大$\phi$表示

$\phi(x;\mu,\sigma^2)$

听说处有16个公式需要记忆

由于不符合牛顿莱布尼兹公式，所以查表寻值（参考附录给出的表格）

#### 公式如下：

- 标准正态分布有： $\phi(-x) = 1 - \phi(x)$
- 对于非规则的（$\mu , \sigma$不为0） ：有$\phi(x;\mu,\sigma^2) = \phi(\frac{x - \mu}{\sigma})$
- 此处有标准化变换：令$y = \frac{t - \mu}{\sigma}$
- $\phi(u_\alpha) = 1 - \alpha$

##### 还有个挺常用的公式：

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241403177.png)

---

## 第三章 二维随机变量及其分布

#### 联合分布函数

定义：设随机试验E的样本空间为$\Omega$，对于每一个样本点$\omega$属于$\Omega$，有两个实数$X(\omega)Y(\omega)$，与之对应，则称它们组成的有序数组（X，Y）为二维随机变量。

注：X，Y都是定义在$\Omega$上的随机变量

$F_X(x)=P\{X\leq x\}$

$F_Y(y)=P\{Y\leq y\}$

$$
F(x,y) = P\{X \leq x , Y \leq y\}
$$

说明是以（x，y）为顶点的左下方的无穷矩形的面积

**联合分布函数**和**边缘分布函数**的概念:

[联合分布函数](https://baike.baidu.com/item/联合分布函数/18885427)

- 其实有点条件概率的那个感觉

有了联合分布函数可以求边缘分布函数，反过来却不行，因为不能保证两个变量相互独立

#### 联合分布函数的性质

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241406754.png)

最后一条还挺重要的，叫做相容性。

然后讲课就推广到了n维

#### 联合分布律

##### 可能的考点

元件组寿命

1. 并联

   a. $T = max(x_1,x_2,...,x_n)$
2. 串联

   a. $T = min(x_1,x_2,...,x_n)$

#### __求T的分布?__

一.,

**1.1**

$$
F_Z(z) = P\{max(x_1,...,x_n) \leq z\}
$$

$$
= P\{x_1 \leq z,x_2 \leq z,...,x_n \leq z\}
$$

$$
= F(z,z,...,z)
$$

加个条件 ---- 若$x_1,x_2,...,x_n$**相互独立**,则:

$$= F_{x_1}(z)...F_{x_n}(z)$$

再加个条件$x_1,..,x_n$**独立且同分布**,则:

$$F_{x_1}^n(z)$$

此时

$$f_Z(z) = nF_{x_1}^{n-1}(z)f_{x_1}(z)$$

**1.2**

$F_Z(z)=P\{min(z_1,z_2,...,z_n)\leq z\}$

$$= P\{Z_1 \leq z \cup Z_2 \leq z \cup ... \cup Z_n \leq z\}$$

$$= 1-P\{Z_1 > z , Z_2 > z , ...,Z_n > z\}$$

若$x_1,...,x_n$**独立同分布**:

$$= 1 - P^n\{Z_1 > z \} = 1 - [ 1 - F_Z(z)]^n$$

则:

$$f_Z(z) = n[1-F_Z(z)]^{n-1}f_Z(z)$$

二.

已知(X,Y)联合密度f(x,y),求Z = X + Y 的密度$f_Z(z)$

1 求$F_Z(z) = P\{ X + Y \leq z\}$

$$=\iint\limits_{x+y\leq z}f(x,y)d\delta$$

$$=\int_{-\infty}^{+\infty} [\int_{-\infty}^{z-x}f(x,y)dy]dx$$

not equal(不要随便换)

$$\int_{-\infty}^{z-x}[\int_{-\infty}^{+\infty}f(x,y)dx]dy$$

***__令u =y + x y = u - x__***

$$= \int_{-\infty}^{+\infty} [\int_{-\infty}^{z}f(x,u-x)du]dx$$

$$=\int_{-\infty}^{z} [\int_{-\infty}^{+\infty}f(x,u-x)dx]du$$

$$f'_Z(z) = \int_{-\infty}^{+\infty}f(x,z-x)dx$$

$$=\int_{-\infty}^{+\infty}f(z-y,y)dy$$

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241407561.png)

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241407936.png)

---

### case1 二维离散型随机变量

#### 下面例题看懂就行

例题：

已知二维离散型随机变量（X，Y）的联合分布律为下：

> balabala

1. P{x = -1 , Y =2} and P{X<= Y }（没什么说的，顾名思义）
2. X和Y的边缘分布律（就是不考虑另外一个变量）
3. X和Y是否独立（独立条件：P{X = x_i,Y = y_i} = P{X =x_i}*P{Y=y_i} ，注：一般都不独立，所以找个反例就ok）
4. Z = X + Y ，W = max{X , Y } 的分布律（还是那会事，合并同类项就行）
5. P{X = -1|Y = 1} （条件概率，利用那个啥，条件概率公式就可）

此处可以有二维离散型随机变量的定义：略。

#### 二维的两点分布

举个简单的例子：用剪刀剪一个悬挂小球的细绳，剪中绳子记为X，小球坠落记为Y，那么F（x，y）就是了

实际上X是因Y是果，但是符合两点分布。



#### 联合概率密度

最重要的性质：**必考**

性质四：

$$p\{(X,Y)\in  G\}  = \iint_G f(x,y)d\sigma$$

性质五：

$$f_X(x) = \int_{-∞}^{+∞}f(x,y)dy$$

反过来$f_Y(y)$也是如此

$$f_Y(y) = \int_{-∞}^{+∞} f(x,y)dx$$

---

### case2 连续型二维随机变量

用到了二重积分

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241412037.png)

$$P\{a<x\leq b | Y = y\} = \int_a^b f_{X|Y}(x|y)dx$$

##### 例题

$设二维随机变量(X,Y)的概率密度为f(x,y)=Cxy0<x<10<y<1(else为0)$

求:

$(1)常数C和P{X+Y<1}$}

$(2)(X,Y)的边缘概率密度$ \*实际上就是求带参函数的积分,难点就是上下限的确定,可以画图解决

$(3) f_{X|Y}(x|y) 和 f_{Y|X}(y|x)$

$(4) 判定X和Y是否相互独立 $

(1) 归一性的应用,还有二重积分的应用

(2)边缘概率密度直接套公式,XY分开求,另一个从负无穷积到正无穷

(3)条件概率的计算而已,套条件密度概率公式

(4) 独立性检验直接检测交集是不是概率相乘,还是套上图公式

*有些题目换坐标轴即可*

##### 二维*均匀分布*的例题(约会问题)

甲乙两艘船要停泊,24小时内到达的概率都是等可能的,且相互独立,如果甲停1小时,乙停2小时,那么求两个中任何一个都不需要等待的概率

分析:

X,Y分别表示甲乙船到达时刻,则它们符合均匀分布,$x~U(0,24)Y~U(0,24)$

且相互独立,

若

$ X< Y \to  X + 1 < Y$

$ X>Y  \to X > Y +2$

求

$P\{X+1<Y或X>Y+2\}$

##### 二维正态分布

有一个看起来很复杂的公式:

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241412299.png)

然后有(X,Y)服从二维正态分布,记为$(X,Y)~N(\mu_1,\sigma_1^2;\mu_2,\sigma_2^2;ρ)$

注:|ρ|<1

推论: ~~据说会考推论的使用~~

- $X~N(\mu_1,\sigma_1^2)Y~N(\mu_2,\sigma_2^2)$
- 独立性balabala,求X,Y的边缘概率密度非常的巧妙,中间凑出来了一个正态分布的标准式子(通过对二次的配项)
- 详细证明可以看百科

  - [ahref=&#34;https://baike.baidu.com/item/%E4%BA%8C%E7%BB%B4%E6%AD%A3%E6%80%81%E5%88%86%E5%B8%83/2951835&#34;](ahref=%22https://baike.baidu.com/item/%E4%BA%8C%E7%BB%B4%E6%AD%A3%E6%80%81%E5%88%86%E5%B8%83/2951835%22)二维正态分布_百度百科 (baidu.com)`</a>`

---

### case3 二维连续型函数的分布

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241413912.png)

#### 两个结论↑

替换:Y=Z - X

1. 替换:Y=Z - X

   a. $f_Z(z) = \int_{-∞}^{＋∞}f(x,z-x)dx$

   b. 确定被积函数:f(x,z-x)dx

   c. 确定x的积分范围

   d. 分情况,带入公式
2. 替换:X = Z - Y

   a. $f_Z(z) = \int_{-\infty}^{+\infty}f(z-y,y)$

   b. 确定被积函数:f(z-y,y)dy

   c. 确定y的积分范围

   d. 分情况,带入公式

#### Z = XY分布  替换 : $Y = \frac{Z}{X}$

1. $f_{XY}(z) = \int_{-\infty}^{+\infty} \frac{1}{|x|}f(x,\frac{z}{x})dx$
2. 确定被积函数:$\frac{1}{|x|}f(x,\frac{z}{x})$
3. 确定x的积分范围
4. 分情况,代入公式

#### Z = max分布

1. $F_{max}(z) = F_X(z) \times F_Y(z)$
2. $f_{max}(z) = F`_{max}(z)$

若X,Y独立同分布

1. $F_{max}(z) = [F_X(z)]^2$
2. $ f_{max}(z) = F`_{max}(z)$

---

### case4 二维独立性

#### 二维随机变量的独立性

随机变量A与B相互独立,则

 $ P(AB) = P(A)P(B)$

定义: 设(X,Y)是二维随机变量,若对任何实数对(x,y)均有

$$P\{X\leq x,Y\leq y\} = P\{X\leq x\}P\{Y\leq y\}$$

- 实际做题应该只考察证明不独立,找出一个**反例**即可

连续型XY相互独立

$$
f(x,y) = f_X(x)f_Y(y)
$$

推广到n个的情况也是如此，如果只求有限个则令其余部分趋向正无穷

- m维随机向量和n维随机向量相互独立
- 随机变量h（x1，x2…)和g（xm,x…)也是相互独立

例：3维随机变量x1，x2，x3相互独立，则

| 3维随机变量 | 相互独立关系 |
| ----------- | ------------ |
| $x_1^2,x_2^2,x_3^2$ | 相互独立 |
| $x_1+x_2$与$x_3$ | 相互独立 |
| $\sin x_1$与$x_2$ | 相互独立 |
| $x_1-x_2$与$x_1+x_2$ | 无法判断相互独立关系 |


![image-20221224140854803](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241408235.png)

---

### case5 二维条件分布

$P\{Y\geq y|X  = x\}$为“当X = x”时，Y的条件分布函数，记为$F_{Y|X}(y|x)$

- 注：$F_X(x)$是一元函数，$F(x,y)$是二元函数，$F_{Y|X}(y|x)$是一元函数,x当成常量处理（x是参量），y是变量

离散两个公式，连续两个公式：

条件密度概率公式的推导中间用了拉格朗日定理：

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241414490.png)

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241415658.png)

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241415582.png)

---

### case6 随机变量的函数及其分布

主要内容: $h(x_1,x_2,...,x_n)$确定Y

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241416575.png)

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241416874.png)

区间的开闭需要注意

#### 离散型随机变量的函数与分布律

$Y = g(X) $是随机变量,则:

$$P\{Y = y_j\} = P\{g(X) = y_j\} = \sum_{x_i \in S_j}P\{X = x_i\} , j = 1,2,...$$

##### 离散卷积公式

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241417612.png)

p一样,相互独立的二项分布加在一起也是二项分布,所以二项分布是具有可加性的分布

具有可加性的分布还有泊松分布

关于如何证明具有可加性,二项见上,剩下的可以根据*两个条件*推导

#### 连续型随机变量的函数及其分布

- 设X是连续型随机变量,若Y = g(X)也是连续型随机变量,则:

$$F_Y(y) = P\{g(X) \leq y \} = \int_{X|g(x) \leq y} f_X(x)dx$$

- 从前有个人,想研究标准正态分布的平方,还有更多的推导,所以有了以下内容:

  - 自由度为1的$\chi ^2$分布

---

## 第四章 随机变量的数字特征

---

### case1 数学期望,方差

#### 常见分布的期望与方差

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241418058.png)

---

#### 期望

##### 定义

设连续型随机变量X的概率密度为f(,x),若$\int_{-\infty}^{+\infty}|x|f(x)dx<+\infty$ 绝对收敛确保数学期望有唯一的数值

则称$E(X) = \int_{-\infty}^{+\infty} xf(x) dx$

为X的数学期望

注:

- 期望时所有可能取值的加权平均值
- 部分随机变量X的数学期望不存在,比如后面的柯西分布

##### 一个核心定理

##### 设X是随机变量,Y= g(X)也是随机变量,计算E[g(X)]

1) 若X是离散型随机变量,分布律为

$P\{X = x_i\} = p_i, i = 1,2,3..$

若:$\sum_{i=1}^{+\infty}g(x_i)p_i$绝对收敛,则有

$E(Y) = E[g(X)] = \sum_{i=1}^{+\infty}g(x_i)p_i$

X是连续型随机变量,概率密度为$f_X(x)$

2) X是连续型随机变量,概率密度为$f_X(x)$

若$\int_{-\infty}^{+\infty}|g(x)|f(x)<+\infty $

则

$E(Y) = E[g(X)] = \int_{-\infty}^{+\infty}g(x)f_X(x)dx$

- 有些分布期望不存在
- 柯西分布$f(x)=\frac{1}{\pi(1+x^2)}$

  - 因为不满足xf(x)条件收敛

如果随机变量相互独立,不仅$f(x,y) = f_X(x)f_Y(y)$,而且期望$E(XY) = E(X)E(Y)$

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241420926.png)

#### 随机变量期望的性质

- 常数的期望为本身$E(c) = c$
- 线性性: $E(cX) = cE(X)$

  - $E(aX + b) = aE(X) + b$
- $E(\sum_{i=1}^{n}X_i) = \sum_{i = 1}^{n}E(X_i)$
- 若$X_1,X_2,...,X_n$相互独立,则$E(\prod_{i=1}^{n}X_i)=\prod_{i=1}^{n}E(X_i)$

---

刻画了随机变量X相对数学期望的偏离程度

- 刻画了随机变量X相对数学期望的偏离程度
- 方差是随机变量X关于任何值的偏离程度的最小值(当然,关于自身数学期望的偏离程度最小)

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241419858.png)

- $D(X)\geq0$

#### 关于离散型和连续型的计算

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241420968.png)

#### 常用计算公式

$$D(X) = E(X^2) - [E(X)]^2$$

#### 方差的性质

- $E(c) = c, D(c) = 0$
- $E(cX) = cE(X), D(cX) = c^2D(X)$

  ![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241421030.png)
- $D(X)=0\iff P{X=E(X)}=1$

#### Chebyshev不等式

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241421067.png)

- 证明倒很简单,就一个简单的放缩

#### 随机变量X的标准化变形

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241421749.png)

---

##### 必考补充定理

设$X~N(0,\sigma^2)$ , 则$E[X^n]=(n-1)!!\sigma^n$ 当n为偶数

注:

- n为奇数时,结果是0
- 双阶乘是隔一个相乘

**证明:**

令

$$I(n) = E[X^n] = \int_{-\infty}^{+\infty} x^n \frac{1}{\sqrt{2\pi}\sigma }e^{-\frac{x^2}{2\sigma ^2}}dx$$

- n为奇数时,该函数为奇函数在对称区间上的积分,为0
- n为偶数时,可以利用分布积分得到一个递推式,最终得到结论

---

关于正态分布:

- 若X是n维非退化(|C\_x|!=0)则Y**不可能**是m维非退化正态分布(m=n+1)
- 当m<=n时,Y是非退化(r(k)=m)那么

  - 非退化正态随机变量的行满秩线性变换为非退化正态分布

---

### case2 协方差,相关系数与矩

协方差

协方差,相关系数就是描述随机变量之间相互关系的数字特征

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241424102.png)

#### 协方差

若$E\{[X-E(X)][Y-E(Y)]\}$存在,称:

$$Cov(X,Y) = E\{[X-E(X)][Y-E(Y)]\}$$

为X,Y的协方差

***特别的***

有$D(X) = Cov(X,X)$

$D(X\pm Y) = D(X) + D(Y)\pm2Cov(X,Y)$

**计算公式**

$$Cov(X,Y) = E(XY)-E(X)E(Y)$$

**协方差的性质**

- $Cov(X,Y) = Cov(Y,X)$
- $Cov(aX,bY) = abCov(X,Y)$
- $Cov(X_1+X_2,Y) = Cov(X_1,Y) + Cov(X_2,Y)$

---

相关系数是衡量两个随机变量之间_线性相关程度_的数字特征

- 相关系数是衡量两个随机变量之间**线性相关程度**的数字特征
- $\rho_{XY}=0$仅说明X,Y之间没有线性关系,但是可以有其他非线性关系

$设二维随机变量X,Y的D(X)>0,D(Y)>0,称$

$$\rho_{XY} = \frac{Cov(X,Y)}{\sqrt{D(X)} \sqrt{D(Y)}}$$

为随机变量X与Y的**相关系数**

**注:**

- $\rho_{XY}$是一个无量纲的量
- $\rho_{XY}=E[\frac{X-E(X)}{\sqrt{D(X)}}\frac{Y-E(Y)}{\sqrt{D(Y)}}]=E[X^{∗}Y^{∗}]=Cov(X^{∗},Y^{∗})$

#### 性质

- 设随机变量X,Y的相关系数$\rho$存在,则:

  - $|\rho|\leq1$
  - $|\rho|=1\iff X与Y依概率为1线性相关,即$

    - 存在$\alpha,\beta,(\alpha\neq 0),有P\{Y=\alpha X+\beta\}=1$

**定理**:

- 若随机变量X与Y相互独立,则X与Y不相关,即有$\rho_{XY}=0$

  - 逆定理不成立

    - *但是正态分布中,相互独立和*$\rho_{XY}=0$*是等价的*

#### 协方差矩阵

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241424469.png)

性质:

- $c_{ii}=D(X_i)i=1,2,3,...n;$
- $c_{ij}=c_{ji}i,j=1,2,...,n;$对称阵
- C是非负定矩阵
- $c_{ij}^2\leq c_{ii}c_{jj}$, $i,j=1,2,\ldots,n$

#### 矩

定义1:设X为随机变量,若$E(|X|^k)<+\infty$,称

$$\gamma_k = E(X^k)    k = 1,2,3...$$

为X的*k阶原点矩*

称$\alpha_k=E(|X|^k),k=1,2,3.....$为X的*k阶绝对原点矩*

定义2:设X为随机变量,若$E[|X-E(X)|^k]<+\infty$,称

$$\mu_k = E\{[X-E(X)]^k\}\\ k =1,2,3...$$

为X的*k阶中心矩*

称

$$\beta_k = E[|X-E(X)|^k]  \\\\ k = 1,2,3...$$

为X的*k阶绝对中心矩*

然后观察得到结论----**随机变量的矩是数!**

---

### 补充内容 分布函数的收敛

**一.r.v.序列的收敛性(random variable/vector)**

[又叫理想中的爱情]

回顾:$a_n\to a,如a_n=\frac{1}{n}a_n\to0(when n\to\infty)$

$\forall\epsilon>0,\exists N,当n>N时,有|a_n-a|<\epsilon$

引例1:

[现实中的爱情]

设

| $X_n$ | 0               | n             |
| ----- | --------------- | ------------- |
|       | $1-\frac{1}{n}$ | $\frac{1}{n}$ |

那么$|X_n-0|<\epsilon不等价于X_n=0$

但是

当$X_n\to X$ $X:\Omega\to R$ $X(\omega)=x$

$X_n,X$均定义在$\Omega$上

1. 若对$\forall\omega\in\Omega:|X_n(\omega)- X(\omega)|<\epsilon$等价于$\{\omega:|X_n(\omega)-X(\omega)|<\epsilon\}=\Omega$等价于$\{|X_n - X|<\epsilon\}=\Omega$

称$X_n$处处收敛于$X$,或$X_n$必然收敛于$X$

证为$X_n\to X(everywhere)或者X_n\to X(sure)$

1. 若$P\{|X_n - X|<\epsilon\}=1$等价于$P\{\lim_{n\to\infty}X_n=X\}=1$

称$X_n$几乎处处收敛于$X$,或$X_n$几乎必然处处收敛于$X$ 或$X_n$以概率1收敛于$X$

证为$X_n\to X(almost everwhere)$或$X_n\to X(a.s.)$或$X_n\to X(w.P.1)$

继续放宽

1. 若$\lim_{n\to\infty}P\{|X_n - X|<\epsilon\}=1$

称$X_n$依概率收敛于$X$

证为$X_n\to X(P)$

再放宽

1. 设$X_n,X$的分布函数为$F_n(X),F(X)$

若$F_n(X)\to F(X)$

仅在$F(X)$连续点成立

则称$F_n(X)\to F(X)(函数列的收敛)$或$X_n\to^{L}_{F}X$

$$
处处收敛\to 几乎处处收敛 \to 依概率收敛 \to 依分布收敛
$$

---

## 第五章 随机变量序列的极限

---

### case1 大数,中心极限定理

#### 大数定理

**二.Markov不等式(马尔可夫不等式)**

$$
P\{|X| < \epsilon\} \geq \frac{E(|X|^k)}{\epsilon^k}
$$

证设$X$密度为$f(x)$

$$
P\{|X| > \epsilon\} = \int_{|X| > \epsilon}f(x)dx \leq \int_{|x| > \epsilon} \frac{|X|^k|}{\epsilon^k}f(x)dx\leq \frac{1}{\epsilon^k} \int_{-\infty}^{+\infty}|X|^kf(x)dx = \frac{1}{\epsilon^k}E(|X|^k)
$$

- **特别的,当k=2,令Y=X-E(X) ,E{|Y|^2}=D(X)存在,有**

**切比雪夫不等式**

$$
P\{|X-E(X)|\geq\epsilon\}\leq\frac{D(X)}{\epsilon ^2}
$$

或者

$$
P\{|X-E(X)|<\epsilon\} \geq 1-\frac{D(X)}{\epsilon ^2}
$$

##### 大数定理

设$\{X_n\}$是一个随机变量序列,其数学期望都存在,若对任意的$\epsilon>0$有

$$
\lim_{n\to \infty} P\{|\frac{1}{n}\sum_{i=1}^{n}X_i - \frac{1}{n} \sum_{i=1}^{n}E(X_i)|<\epsilon\} = 1
$$

称随机变量序列$\{X_n\}$服从大数定理

**注**:

1) $\{X_k\}$服从大数定律是指

$$
\frac{1}{n}\sum_{i=1}^{n}X_i \stackrel{p}{\longrightarrow} \frac{1}{n}\sum_{i=1}^{n}E(X_i)
$$

2) 服从大数定律即是$\{X_k\}$的前n项算术平均将紧密的聚集在数学期望的附近

#### 常见的大数定律

##### 切比雪夫大数定律

- 设{X\_k}是相互独立的随机变量序列,期望方差都存在,则存在常数C,满足

  $$
  D(X_K)<C \\\ k=1,2...
  $$

说明{X_k}服从大数定律

##### 独立同分布大数定律

- 设{X\_k}是相互独立且同分布的随机变量序列,且$E(X_k)=\mu,D(X_k)=\sigma^2,k=1,2,3..$,则{X\_k}服从大数定律,有:

$$
\lim_{n\to \infty}P\{|\frac{1}{n}\sum_{k=1}^{n}X_k-\mu|<\epsilon\}=1
$$

- 此定理为切比雪夫大数定理的推论
- 为实际应用中大量重复测算值得算术平均值作为精确值得计算提供理论依据
- 有更一般的结论

##### 辛钦大数定律

- *__不要求掌握,了解就行__*
- 设{X\_k}独立同分布,X\_k若有有限的数学期望a,则{X\_K}服从大数定律

##### 伯努利(Bernulli)大数定律

- 设$\frac{m}{n}$是n次重复独立试验中事件A发生的频率,p是事件A在每次试验中发生的概率,则对$\forall\epsilon>0$,有

$$
\lim_{n\to \infty}P\{|\frac{m}{n}-p|<\epsilon \} = 1
$$

- 此定理为切比雪夫大数定律的推论之一
- 严格的数学形式描述了频率的稳定性
- 小概率事件在实际中可以看作不可能事件(买彩票中奖)

#### 中心极限定理

**定义**:依分布收敛

设随机变量$X,X_1,X_2,...$的分布函数分别为$F(x),F(x_1),...$,若

$$
\lim_{n\to \infty} F_n(x) = F(x)
$$

在F(x)的每一个连续点上都成立,则称随机变量序列$\{X_k\},k=1,2,...$依分布收敛于X.并记为

$$
X_n \stackrel{L}{\longrightarrow}X
$$

**定义**:中心极限定理

设随机变量$X~N(0,1),\{X_k\} , k=1,2,...$相互独立,且数学期望和方差都存在,若标准化随机变量序列

$$
\frac{\sum_{k=1}^{n}X_k-\sum_{k=1}^{n}E(X_k)}{\sqrt{\sum_{k=1}^{n}D(X_k)}}
$$

依分布收敛于X,则称随机变量序列{X_k},k=1,2,3...服从中心极限定理

注:

- 解释了现实中哪些随机变量可以看为服从正态分布
- 给出了概率的近似计算公式

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241429884.png)

##### 独立同分布中心极限定理

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241429876.png)

- 产品检验

  - ![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241429470.png)
- 产品测重

  - ![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241430151.png)

##### 棣莫佛\-拉普拉斯中心极限定理

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241430965.png)

- 航船的稳定性
- 报亭售报问题

---

## 第六章 数理统计的基本概念

#### 总体,样本与统计量

##### 总体与个体

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241430001.png)

**总体分布**是指__数量指标__**X**的分布

#### 样本

按照__一定规则__从总体中抽取的一部分个体

__是一组随机变量__

$$
(X_1,X_2,...,X_n)
$$

满足:

- $X_i$与总体同分布
- $X_1,X_2,...,X_n$相互独立

以上两点要求的是**简单随机样本**,以后的样本都是这样的样本.

**抽样**:抽取样本的过程

**样本容量**:样本中个体的数目n

**样本值(样本观测值):**具体观察数值记作$x_1,x_2,...,x_n$

#### 统计量

不包含未知参数的样本的函数

$$
T = g(X_1,X_2,...,X_n)
$$

对于相应的样本值$(x_1,x_2,...,x_n)$,称

$$
t = g(x_1,x_2,...,x_n)
$$

为统计量的**统计值**

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241431315.png)

---

### case1 常用四种统计分布

标准正态分布

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241431614.png)

#### $\chi^2$(卡方)分布

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241431539.png)

上面的两个不用记,当然也记不住,***__重要的看下面__***

#### 卡方分布的一个定理

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241432078.png)

#### 卡方分布的三条性质

##### 性质一:数字特征

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241432194.png)

##### 性质二:可加性

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241432179.png)

##### 性质三:大样本分位数$\chi^2_\alpha$

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241432208.png)

#### 自由度为n的t分布 T~t(n)

又名学生氏分布--第一个研究者笔名是Student

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241432594.png)

服从标准正态分布的随机变量与 /符合卡方分布的随机变量自己的自由度的开方 的比值，符合T分布

#### F分布  F~F(n1,n2)

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241433363.png)

两个服从标准正态分布的随机变量除以各自的自由度的商，符合F分布

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241433288.png)

---

### case2 抽样分布

单正态总体的分布定理

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241433630.png)

定理1和3不做要求，用到矩阵变化

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241434708.png)

---

## 第七章 参数估计

定义: **参数估计**是对已知分布类型的总体,利用样本对其未知参数做出估计

参数估计

- 参数估计

  - 点估计

    - 矩估计
    - 极大似然估计
  - 区间估计

#### 矩估计思路过程


| $X\sim P(\lambda)$ | 比如泊松分布 |
| ------------------ | ------------ |
| $\lambda$未知 | 条件:样本X1,X2,...,Xn |
| 建立 | $\hat\lambda=h(x_1,x_2,...,x_n)$ |
| 建立 | 未知参数与样本的某个方程 |
| 如果建立方程(组) | 依据是什么? |
| $(x_1,x_2,...,x_n)$独立同分布 | 联想大数定律 |
| $\frac{1}{n}\sum_{i=1}^{n}x_i^k\to{p}E(x^k)$ 依照概率p | |

如果题目中没有样本,需要加上这句话:

- 设$x_1,..,x_n$是来自总体X的样本

令,.....

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241434441.png)

#### 极大似然估计(M.L.E.)

maximum likelihood estimation

按最大可能性准则推断小概率事件原理

做一次试验,事件A发生了,由小概率事件原理,$P(A) = L(\theta)$不应该小;

现确定$P(A)$,由最大可能性准则,令$P(A) = maxL(\theta)$等价的,令$\theta$为$L(\theta)$的最大值点

一般的,$A= (X_1 = x_1, ...,X_n = x_n)$

- 离散型总体分布

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241435823.png)

- 连续型总体分布

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241435676.png)

---

### case1 估计量的优良性准则

无偏性

有效性

相合性

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241435907.png)

---

### case2 置信区间

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241436835.png)

一个例子搞定7，3和第八章

这个方法叫做--枢轴变量法

因为$\mu$是一个数（总体矩是个数），没办法求概率

所以找X的算数平均值来曲线救国，最后对X的算数平均数进行标准化变形时，里面就有$\mu$

单正态总体四个问题

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241437168.png)

---

## 第八章 假设检验

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241437791.png)

---

## 第九章 回归分析

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212241438266.png)

---
