---
layout: post
title: "数据挖掘与大数据分析"
date: 2022-12-27 12:00:00
description: >
  主要介绍了数据挖掘与大数据分析的基础知识，包括大数据的定义与理念、数据挖掘的产生背景及原因、数据挖掘的应用、数据挖掘的主要功能、数据挖掘面临的挑战等内容。
categories: ["notes"]
tags: ["Machine Learning", "Big Data", "Data Mining", "大二下"]
math: true
---
## 1.1. Chapter1 数据挖掘与大数据简介

### 1.1.1. 什么是大数据

> Big data is a buzzword, or catch-phrase, used to describe a massive volume of both structed and unstructured data that is so large that it's difficult to process using traditional database and software techniques.

### 1.1.2. 大数据的定义与理念

Four features of Big data:

* Volume
  * Scale of data
* Variety:
  * Different forms of data
* Velocity:
  * Analysis of streaming data
* Veracity:
  * Uncertainy of data

### 1.1.3. 数据挖掘产生的背景及原因

* 存储能力的提升
* 计算能力的提升
* 海量的数据生成

> 我们浸没在数据的海洋, 却渴望知识的淡水

通过数据挖掘从矿山中获得有用的信息

### 1.1.4. 什么是数据挖掘以及在何种数据上挖掘

> Data mining consists of applying data analysis and discovery algorithms that, under acceptable computational efficiency limitations, produce a particular enumeration of patterns over the data.

KDD过程:

$$数据清洗\to 数据集成\to 数据选择\to 变换\to 数据挖掘\to 模式评估\to 知识表示(可视化)$$

### 1.1.5. 数据挖掘的应用

* 流感预测
* 电信推销
* 银行借贷
* 保险识别
* 等

### 1.1.6. 数据挖掘的主要功能

1. 关联规则挖掘(关联分析)

> 发现数据之间的关联规则, 这些规则展示属性/值频繁的再给定的数据中所一起出现的条件


应用: 每当暴风季节来临, 美国沃尔玛的飓风用品和蛋挞销量都会增加,所以把二者放在一起销售可以提高销量.

Example: 空气质量与气象之间的关联挖掘
2. 聚类分析 （无标签）

> 把类似的数据归类到一起,形成一个新的类别进行分析


   Example: 大脑神经纤维聚类
3. 分类/预测 （有标签

> 找出描述和区分数据类/概念的模型, 用以使模型能预测未知的对象类标签


4. 孤立点(离群点)检测

> 孤立点:一些与数据的一般行为或模型不一致的孤立数据
   

   通常孤立点被作为"噪声"或异常被丢弃, 但是在欺骗检测中可以通过对罕见事件进行孤立点分析得到结论

### 1.1.7. 数据挖掘面临的挑战


* 数据容量(Scale of Data)
  * Scalable Data Mining Algorithms
    * Novel scalable algorithms(Sampling, Hashing, Divide-and-Conquer, etc)
    * Map-reduce oriented Parallell platforms(Hadoop, Spark, GraphLab)
    * Speed-up Hardwares(GPUs/Clouds/Clusters)
* 数据实时性(Data Stream)
  * Data Stream Mining
    * Handle Evolving Data Streams
    * Clustering on Massive Data Streams
    * Classification/Regression on Data Streams
    * Outlier Detection on Data Streams
* 数据多样性(Different types of data)
  * Multi-source or multi-type data mining
    * Different types of data(Categorical/nominal data, mixed-type data mining)
    * Different forms of data(vector data, graph data, image data, text data, hetergeneous data)
    * Learning on different sources of data(Multi-view learning, Transfer learning, Multi-task learning, etc)
    * Data fusion or data integration(multiple-kernel learning)
* 数据不确定性(Uncertainty, missing value)
  * Uncertainty Analysis, Link/Missing value prediction
    * Uncertain data Clustering(Probability-function based)
    * Link Prediction(Clustering-based, Structure-based, Multi-view based)
    * Recommender System(Missing items prediction,...)
    * Robust Machine Learning(Adversarial Examples)



## 1.2. Chapter2 认识数据与数据预处理

### 1.2.1. 认识数据
#### 数据相似性度量
##### 标称
* 标称 

$d(i,j) = \frac{p-m}{p}$
* 非对称 

$d(i,j) = \frac{\ Differences}{Total -(0)}$ 
雅各比距离
* 序数：转换到（0，1） 

$Z_1 = \frac{Z_{n-r}-1}{R(Rank)-1}$

##### 数值型
闵可夫斯基距离
* 曼哈顿距离 p = 1
* 欧氏距离 p = 2
##### 其他
* 余弦相似性
* 相关系数
* 马氏距离（不考 考虑局部分布的距离）
* KL散度（复杂 计算分布的差异性）

### 1.2.2. 为什么要预处理数据

### 1.2.3. 数据清洗
* 空缺值 
	* 平均值代替空值
	* 直接删去
	* 矩阵分解（不考）
		* 如果是nominal类型的数据就是采用大多数类型赋值
* 去噪
	* 平滑值
	* 利用中值滤波


### 1.2.4. 数据集成和变换

* 数值值 相关分析
* 标称型 卡方分析（考试计算）

$$\chi^2 = \frac{\sum_{i=1}^{n}(a_{ij}-e_{ij})^2}{e_{ij}}$$
$$e_{ij} = \frac{cout(a_i=a)\times cout(b_i = b)}{N}$$

变换是为了规范化
* 最小最大规范化
$$Z_i = \frac{x_i - minV}{maxV - minV}$$
* z- score 把变量当成正态分布进行标准化操作
$$\frac{x_i - \mu}{\delta}$$
### 1.2.5. 数据归约
#### 维度归约
* 降维
	* PCA主成分分析（方差最大化）
	* 小波分析
* 特征筛选
	* 信息增益 - 信息熵
	* （均匀分布熵最大）
#### 数量归约
* 直方图
* 聚类
* 采样

### 数据离散化处理
比如年龄、身高、体重



## 1.3. Chapter3 关联规则挖掘

### 1.3.1. 关联规则概述
* 支持度
* 置信度
* 频繁项集
	* 项集
		* 项 其中（少青老、高低、胖瘦）属于nominal
* Brute Force 蛮力算法（类似于决策树）
	* 降低候选集需要使用Aprior算法，利用两条性质
		* 频繁子集也频繁
		* 不频繁超急也不频繁

### 1.3.2. 由事务数据库挖掘关联规则

### 1.3.3. FP增长树算法

### 1.3.4. 关联模式的评估
不重要
## 1.4. Chapter4 分类
### 1.4.1. 分类和预测概述
* 有监督学习（连续型数据，既有feature也有label）
* 无监督学习（离散型数据，只有feature没有label）
	*  Generative Model
		*   Naive Bayers
	*    Discriminative Model
	     *    SVM、Decision Tree
### 1.4.2. 决策树分类算法
#### **信息增益**选择划分节点（ID3）
信息增益率（C4.5）
$$信息熵E = -\sum_{i =1}^{n}p_ilogp_i$$
信息增益率为两次作差再比上第一次的信息熵
Gini率（CART）
$$Gini(D) = 1-\sum_{i=1}^{n}p_i^2$$
测算不纯度，和信息增益反过来

#### 过拟合问题
过拟合原因是数据量太小
剪枝可以降低过拟合
### 1.4.3. KNN最邻近算法
K-nearest-neighbor
优缺点
性能问题

### 1.4.4. 朴素贝叶斯分类算法
Naive-Bayers
$$Pr(c|x) = \frac{Pr(c\cap x)}{Pr(x)} = \frac{Pr(c)Pr(x|c)}{Pr(x)}$$
Where $Pr(c|x)$ is Posterior  probability and $Pr(c)$ is Prior probability.
And $Pr(x|c)$ is 似然概率.
### 1.4.5. SVM和其他经典分类方法
Support Vector Machine
$Y^* = H(x|\theta)$
for Training :
Empired Risk
$$min\sum_{i = 1}^{n}(Y_i^*-Y_i)^2 \to loss$$
核心问题：最大间隔化

###  w、b使分类正确
 $wx_i +b\geq 1$
 $wx_i+b\leq 1$
 $\to$ $y_i(wx_i+b)\geq 1$
### 距离最大间隔
 					
$$d(x_0,wx+b = 0) = \frac{|wx_0+b|}{||w||} = \frac{1}{||w||}$$
使用拉格朗日乘子法 
求解凸二次规划问题

 * convex	
 * KTT condition
从极大值求极小值
### 核函数
Kernel Function
$$K(x_1,x_2) = \Phi (x_1) * \Phi(x_2)$$
通过低维到高维的映射，使线性不可分 $\to$ 线性可分

### ANN
Artificial Nerual Nerwork
#### 作用函数
* 阈值型
等两个
#### 拓扑结构
* FeedForward(一般神经元都是全连接)
* FeedBack（类似于时序逻辑电路，输入受输出的影响）
#### 优化模型
* 调整权重
	* 相关学习（旧方法）
	* 误差修正学习
$\delta$学习规则（改权值）
$$w_{ji}(t+1)=w_{ji}(t)+\eta[d_j-y_j(t)]x_i(t)$$

### 感知机

### 后向传播算法（BP）
* 信息的正向输入
* 误差的反向传播
	* 利用梯度下降

### 集成学习
* 同质（多）/异质（少）
	* 增加学习器的多样性
* Bagging
	*  Random Forest
		*  传统决策树节点利用信息增益选出划分
		*  RF算法随机选每个节点中的k个属性，再选最优划分（增加随机性）
*  Boosting
	* (Ada-Boost)	由弱到强
		* 关注错误，增大权重，调整样本，n个学习器套娃
* Stacking 
	* 对初始样本集--处理后的新样本集（经过初级学习器）

### 1.4.6. 分类算法评估
#### 评价指标
* 精确度
$$Accuracy = (TP+TN)/ALL$$
* 误差率
$$(FP+FN)/ALL$$
* $F_1$分数
$$F_1 = \frac{2\times Precision\times Recall}{Precision+Recall}$$
* Precision
$$Precision = \frac{TP}{TP+FP}$$
* Recall
$$Recall = \frac{TP}{TP+FN}$$


## 1.5. Chapter5 聚类分析和噪声检测
 
### 1.5.1. 聚类分析概述
#### 定义
> 聚类分析是一种数据挖掘技术，将数据集中的对象按照相似性分成不同的簇（cluster），每个簇内的对象都具有较高的相似性，而不同簇之间的对象则具有较大的差异性。
应用巨大：
* 价格歧视为用户制定画像
* 数据预处理
* 离群点检测
* 等等
#### 目的
找出数据中潜在的自然规律
#### 划分方法（Partitioning method）
##### K-means
目标函数：
$$min\sum_{i=1}^{k}\sum_{x_i-x_j}(x_i-x_j)^2-\sum_{i=1}^k\sum_{x_i\in C_k}\sum_{x_j\in C_m}(x_i-x_j)^2$$
这玩意谁算的过来，so
$$E = \sum_{i=1}^k\sum_{x\in C_i}|x-\hat{x_i}|^2$$
which:
$\hat{x_i}$ 是第 $i$个簇的均值

$C_i$为第 $i$ 个簇

### 1.5.2. 聚类分析中的数据类型

#### 基于划分

#### 基于层次
* 凝聚
	* AGNES
* 分裂
	* DIANA

#### 距离度量
* minimum distance
* maximum distance
* mean distance

### 1.5.3. 聚类分析方法
#### DBSCAN Destiny-Based Spatial Clusters of Applications with Noise
* $\epsilon$邻域
* 核心对象
* 直接密度可达
* 间接密度可达

从k的选取改为$\epsilon$与MinPst的选取
I/O开销比较大

#### 网格聚类
##### STING算法
Statistical Information Grid-based Method
多分辨率聚类技术


### * 补充内容（无监督学习）
#### Auto Encoder
$$X \to Encoder \to E \to Decoder \to X'$$
Expection: $min||X-X'||$

#### Word2Vector(词向量)
相似性度量
由词带模型推广
缺点：
	举个例子，you love I， I love you
	都可以表示为101，但是词义不同

#### 提示补全
比如 I love __ , 这个__ 就是利用极大似然估计推断可能是“you”。
$$f(x|\theta) = \prod_{i=1}^{n}f(x_i|\theta)$$
使得联合概率密度最大

$$Pr(\omega_1,\omega_2,...,\omega_n|context(\omega_i))$$
$$log\prod_{i=1}^{N}Pr(\omega_i|context(\omega_i))$$
$$max\sum_{i=1}^{N}logPr(\omega_i|context(\omega_i))$$
然后使用$sigmoid$函数

### 异常点检测
#### 基于距离的检测
低维中使用
- 基于单元（cell- based）的算法
#### 基于统计量的检测
需要知道分布（现实情况中有些不知道）
#### 基于偏离的检测
- 基于序列
	- 模仿人类推理、去除方差
	- 平滑因子（smoothing factor）
- 异常集（exception set）

#### 基于密度的方法（LOF）
- 对象p的k距离（$k- distance$）
- 对象p的k邻域（$N_k-distance$）
	- 关于这个$N_k-distance$有个计算公式
- 对象p相对于O的可达距离
	- $$reach-distance(p,o) = max\{k-distance(p),d(p,o)\}$$
- 对象p的局部可达密度（Local Reachable Distance）
	- $$lrdMinPst(p) = 1/ \frac{o\in N_MinPst(p)\sum reach-distMinPst(p,o)}{NMinPst(p)}$$
- 对象p的局部异常因子（Local Outlier Factor）
	- $$LOF_{MinPts}(p)=\frac{\sum_{o\in N_{MinPts(p)}} \frac{lrd_{MinPts}(o)}{lrd_{MinPts}(p)}}{|N_{MinPts}(p)|}$$

#### Synchronization
压缩簇、最后剩下的就都是outliers

## 1.6. Chapter6 大数据分析
 1. 哈希的作用
 2. k- shingling（k from 3-10）
 3. MinHash
 	3.1 定义：首次提出行号
 	3.2 如何计算签名矩阵
 	3.3 可选/近似
$$sim(c_1,c_2) = \frac{a}{a+b+c} = Pr(h(c_1))=h(c_2)$$
 4. LSH（局部敏感哈希）
 	4.1 基本思想： Hash Bond
 	take the similarities into different bucket


### 1.6.1. 大数据简介

### 1.6.2. 哈希技术
* 信息检索
* 存储
* 最邻近点检索
#### 局部敏感哈希（LSH）
1. shingling： convert document emails ... -- sets
2. Minhashing: large sets -> signature
3. locality-sensitive hashing:focus on pairs of signatures

### 1.6.3. 数据流挖掘
#### 数据流（Data Stream） <= 实时性
#### Concept Drift
hyper-plane
#### Concept Drift Detection
* Distribution-based detector
	* Adaptive window(ADWIN)
	* Error-rate Based detector
	* DDM
* KNN(可以直接处理Concept Drift Detection，需要压缩数据)
* SVM等需要
#### VFDT(very fast dicision tree)
$$\overline{G}(x_i) - \overline{G}(x_j) > \epsilon$$
处理流式数据

#### Data Stream Cluster
The clustream framework
线上阶段： 压缩（数据结构）
线下阶段： k-means，DBSCAN、STING
##### Micro Cluster 微簇
###### Cluster feature
$$CF = (N,\vec{LS},\vec{SS})$$
Where:
N : `data point`
LS =  $\sum_{i=1}^{N}\vec{X_i}$
SS = $\sum_{i=1}^{N}\vec{X_i}^2$

 Stream:
 $$CF(N+1,\vec{LS}+x,\vec{SS}+x^2)$$
 	key point: additivity property

压缩everything from a circle into a array

#### Clusteam : Pyramical Time Frame
金字塔时间窗口

### 1.6.4. 大数据处理平台 Hadoop/Spark
 复习：
 1. 数据流面临的挑战
 2. 什么是概念漂移$P(c|x)$
 3. 概念漂移检测方法
 	3.1 基于分布（缺点）
 	3.2 基于错误率 （$3\sigma$ 原则）
 4. 分类（VFDT）
 	Hoeffding Tree:
 	VFDT（Very Fast Decision Tree）算法中，有一种基于 Hoeffding 不等式的增量式决策树叫做 Hoeffding Tree。Hoeffding Tree 是 VFDT 算法的一种实现方式，它使用 Hoeffding 不等式来估计节点分裂的置信度，并在满足一定置信度要求时进行节点分裂，从而构建出决策树模型。与传统的决策树算法不同，Hoeffding Tree 可以在处理大规模数据时快速构建决策树，并且具有较好的泛化性能和可解释性。
 5. 数据流聚类
 	5.1 在线数据抽象
 	$CF(N,\vec{LS},\vec{SS}$)
 	5.2 线下聚类（DBSCAN，k-means）

#### Hadoop
分布式并行计算 parallel
心跳机制判断单点故障
Essence：Divide and Conquer

- HDFS: Hadoop Distribution File System
	- Centralized namenode
		- maintains metedata info about files
	- Data Nodes
		- Files are divided into blocks

#### Spark
Reduce I/O Costs, use cache 
弹性分布式数据集（Resilient distributed datasets）
Essentials：
- Transformations



## 期末复习

## CH1 简介
1. 什么是大数据
2. 大数据三大驱动力
3. 大数据4V特征
4. 什么是数据挖掘
5. （重点）知识发现的流程是什么？（核心：数据挖掘）
6. 数据挖掘的四大任务
	1. 关联规则挖掘
	2. 分类/回归
	3. 聚类分析
	4. 离群点检测
7. 数据挖掘与其他学科的关系
	1. 数学/机器学习/统计

## CH2 认识数据与数据预处理
1. 数据对象属性
	1. 分类性（离散）
		1. 标称型
		2. 序数型
	2. 数值型（连续）
2. 二值型
	1. 对称
	2. 非对称
3. 数据类型
4. 数据相似性度量
	1. 标称型（非对称二值型）
	2. 序数型
	3. 数值型
		1. 欧氏距离
		2. 曼哈顿距离
		3. 闵可夫斯基距离
5. 其他度量
	1. 余弦距离
	2. 相关系数
	3. （*）马氏距离
	4. （*）KL散度
6. 数据描述
	1. 中心性描述
		1. 均值/中位数/中间数/众数
	2. 散度描述
		1. 方差/标准差/百分位数/极差
7. 数据预处理（可选）
	1. 数据清理
		1. 缺失值填充
			1. 忽略/NaN/均值/类似值/预测
		2. 噪声
			1. 平滑、滤波 
			2. 离群点检测
	2. 数据集成
		1. 相关分析
			1. 分类（标称）
			2. 数值（相关系数）
		2. 卡方分析
			1. 这该有个公式
	3. 数据规约
		1. 维度压缩
			1. PCA、小波分析 
			2. 特征筛选
				1. 相关性分析（卡方、信息增益）
		2. 数据量规约
			1. 采样
			2. 直方图
	4. 数据归一化
		1. 最小最大归一化
		2. Z-Score
	5. 数据离散化
		1. 直方图 xmin---xmax

## CH3 关联规则挖掘
1. 基本定义
2. （重点）Aporior算法
	1. 性质（两大性质）
	2. 流程（计算） 
3. Aporiori的性能影响（支持度、置信度）
4. Aporiori改进方法
	1. 4个（看ppt）
5. FP- Growth
	1. 范式比较（Aporiori）-》产生测试
	2. 生成FP树（重点、 ）
	3. 流程

## CH4 分类问题
1. 机器学习的分类
	1. 有监督/无监督/半监督
2. 有监督vs无监督
3. 有监督学习
	1. 生成模型
	2. 判别模型
4. 经典算法
	1. 决策树
		1. 决策树的构造流程
		2. 选择属性划分的准则（使得划分后的数据类别越准越好）
		3. 常见的属性选择指标
			1. 信息增益
			2. 信息增益率
			3. 基尼指数 
		4. 过拟合问题
			1. 原因：训练集和测试集分布不一致
			2. 如何避免过拟合问题
				1. 增加样本量
				2. 去除噪声
				3. 降低模型复杂度
				4. 加正则
				5. Train- Validation-Test
			3. 如何在决策树中避免过拟合
				1. 降低层数
				2. 控制叶子结点个数
				3. 先剪枝/后剪枝
			4. 决策树优点
				1. 可解释性强IF/Then
	2.  KNN
		1.  注释
		2.  懒惰学习（Lazy Learning）无需训练
		3.  算法优缺点
			1.  优点：适合流式增量数据
			2.  适合大量类别数据
			3.  准确率一般较高
			4.  缺点：K值敏感
			5.  类别不平衡问题
			6.  测试耗时
	3.  Naive-Bayers
		1.  思想：求后验分布
		2.  优点：概率输出
	4.  SVM
		1.  基本思想：间隔最大化
		2.  SVM为什么支持小样本（决策边界只由几个支持向量决定）
		3.  SVM为什么泛化能力强（因为结构风险最小化【置信风险】）
		4.  SVM如何实现线性不可分问题（核技巧，通过点积运算实现了数据从低维到高维的映射；核技巧不一定解决线性不可分问题）
	5.  ANN
		1.  信息正向传播，梯度反向传播
		2.  优点：拟合几乎所有函数
		3.  缺点：慢、过拟合
5.  集成学习
	1.  准则：
		1.  基学习器足够好
		2.  有多样性
	2.  Bagging（Random Forest）
		1.  Boosting（Ada Boost）
		2.  Stacking
6.  分类评估
	1.  常见指标：pre、rec、f1、acc
	2.  类别不平衡：sensitivity、specificity

## CH5 聚类分析与离群点检测
1. 什么是聚类分析
2. 聚类的作用（检测离群点、噪声）
3. 聚类的分类
	1. （重点）基于划分的方法（k-means）【kmeans流程计算】 
	2. 基于层次的方法（AGENS、DIANA）
	3. 基于密度的方法（DBSCAN）
	4. 基于网格的方法（STING）
4. k-means流程（计算）
5. k-means优缺点
	1. 优点：快
	2. 缺点：
		1. 对k值敏感
		2. 对初始值敏感
		3. 对噪声敏感
		4. 不能发现非球形（任意形状）的簇
6. DBSCAN优缺点：
	1. 优点：
		1. 可以发现任意形状的簇
		2. 无需设置k
		3. 可以任意检测噪声
7. 什么是离群点
8. 离群点分类
	1. 全局/局部/集成
9. 离群点检测方法
	1. 基于统计/距离/密度（LOF）/序列

## CH6 大数据分析
1. 哈希技术
	1. 作用
	2. k- shingling 
	3. minHash（定义）【如何计算签名矩阵】（近似计算； ）
	4. LSH（局部敏感哈希）思想：找哈希函数把相似的对象映射到同一个桶中
2. 数据流挑战
	1. 挑战（四大） 
	2. 什么是概念漂移 
	3. 概念漂移检测方法 
		1. 基于分布
		2. 基于错误率【都有缺点】
	4. 分类（VFDT） 
	5. 数据流聚类
		1. 线上数据抽象（簇特征）
		2. 线下聚类CF（N，LS，SS）可加减性 
3. Hadoop&Spark
	1. 什么是Hadoop
	2. Hadoop设计准则
	3. Hadoop组件
		1. HDFS（hadoop distribution file system） 存储
			1. Meta data 《- Meta node》 + data node（实际数据）心跳机制维持
		2. mapreduce
	4. spark是什么
		1. RDD（弹性分布式数据集）
		2. RDD操作（Transform /Action）
	5. MapReduce与Spark区别
		1. mapreduce是one pass
		2. spark是多轮、共享机制、RDD内存、API
