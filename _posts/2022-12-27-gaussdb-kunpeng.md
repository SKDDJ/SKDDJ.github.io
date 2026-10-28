---
layout: post
title: "鲲鹏聚数:基于华为GaussDB数据库的应用与实践"
date: 2022-12-27 12:00:00
description: >
  华为GaussDB与Open Euler OS
categories: ["notes"]
tags: ["GaussDB数据库", "Open Euler", "大二下"]
math: true
---
## 1.1. Chapter1 GaussDB数据库概述

edition：opengauss 3.1.0 

### 1.1.1. 数据库系统基本概念
> 定义：数据库是长期存储在计算机内，有组织的，可共享的大量数据集合。（目前定义，新定义与云原生数据库有关）

#### 特征
* 数据按一定的数据模型组织、描述、和存储
* 可为各种用户共享
* 冗余度较小
* 数据独立性高
* 易扩展

关于数据独立性和逻辑独立性：
逻辑独立性通过 **视图（view）** 实现一个映射关系

#### 数据库管理系统（DBMS）
> 定义：能够让用户定义、创建和维护数据库以及对数据库访问的软件系统。


组成：查询处理器和存储处理器

#### 三层模式体系结构
* 内模式（internal schema）物理数据库 
	* Index 定义数据
		* 例如 （non）cluster index （非）聚集索引
* 概念模式（conceptual schema）概念数据库
* 外模式（external schema） 
	* 是概念模式的子集
	* 保证了数据库数据的安全，每个用户对数据的访问权限不同


#### 关系数据模型
* 关系模式
	* 关系必须是规范化的，满足第一范式（1NF），每一个分量必须是不可分的数据项，不能表中有表

可以用作唯一标识的属性可以当作`候选建（Candidate key）`	，DBA可以根据需要选一个当`主键（Primary Key）`
`外键（Foreign Key）`：这个键在某个表中是主键，但是在另外一个表中不是主键，那么在非主键关系表中这个键叫做**外键** 


#### 关系完整性
三类完整性约束：
* 实体完整性：主码不能取空值
* 参照完整性：
	* 取空
	* 和主码一样的值

### 1.1.2. 鲲鹏生态体系

### 1.1.3. GaussDB数据库的发展历程及其特点

### 1.1.4. GuassDB数据库的体系结构和主要功能

## 1.2. Chapter2 结构化查询语言SQL

### 1.2.1. SQL语言基础
核心功能只有九个指令：
* DDL: CREATE DROP ALTER
* DML: SELECT INSERT UPDATE DELETE
* DCL: GRANT REMOVE 

### 1.2.2. 数据库对象定义

### 1.2.3. 数据查询和数据修改SQL语句
许多检测工具会执行一条SELECT 1;来测试数据库连接
#### 数据查询
* 无条件查询
* 聚集查询
* 多表查询
	* 自然连接：相同属性列下面的值必须相等，最终返回的视图会删掉重复的列
	* 等值连接：不会删除重复的列，会显示来自哪张表中的属性
	* 自连接：可以比较不同表的不同列
	* 非等值连接：比较关系是其他比较符号
	* 嵌套查询：`SELECT`嵌套，理论上限为200个
	* 联合查询：关键字`UNION`，就是并运算
``` sql
SELECT [ALL|DISTINCT]<目标列表达式>[,>目标列表达式>]...
	[INSERT INTO<新表名>]
	FROM <表名或视图名>[,<表名或视图名>]...
	[WHERE<条件表达式>]
	[GROUP BY<列名1>][HAVING<条件表达式>]
	[ORDER BY<列名2>][ASC|DESC]
```

#### 数据增加
``` sql
INSERT INTO 表一 [<列>] 
VALUEE 表二
```
#### 数据修改
```sql 
UPDATE<基表名>
SET <列名1> = <表达式2>
[WHERE <条件表达式>]
```

>WITH CHECK OPTION是一个SQL语言中的约束条件，它用于限制向数据库中插入或更新数据的行为。

>当使用WITH CHECK OPTION约束条件时，它可以确保插入或更新的行满足指定的WHERE子句。如果插入或更新的行不符合WHERE子句，则操作将被拒绝，并返回错误信息。

##### 索引
```sql 
CREATE CLUSTER INDEX stusname ON Student(Sname)
```
在建立好索引后，需要按照顺序在条件判断中使用索引：比如先建立索引A，然后B，就不能先判断B再判断A

##### 目标列表达式格式
` */表名.属性列/count(*)/属性列表达式`
其中`count(*)`自动去重，计算主码分量个数


## 1.3. Chapter3 GaussDB的运行环境及安装

### 1.3.1. GaussDB单机版运行环境搭建
见pdf文件
利用ssh终端连接软件
### 1.3.2. 数据库连接管理
TableSpace DataBase
一个表空间可以有多个数据库，数据库是逻辑概念
Segment
* 表空间table space
* 模式scheme
* 用户user


### 1.3.3. 数据库实例管理

## 1.4. Chapter4 SQL基础实验

### 1.4.1. 在GaussDB数据库环境下执行SQL命令的方式

### 1.4.2. 使用数据定义,数据查询以及数据操纵SQL命令完成数据库实验

## 1.5. Chapter5 数据库应用程序设计实验

### 1.5.1. 数据库应用程序设计的方式

### 1.5.2. SQL语言嵌入到高级程序语言中访问和操纵数据库的方法

### 1.5.3. 高级语言访问GaussDB数据库的接口

## GitHub项目地址
[HR-management-system](https://github.com/SKDDJ/HR-management-system)
> Forked from Mr. Cai, an alumnus of the Internet Plus program in the class of 2020, and made some changes to the code.

1. Change the datanode from remote OpenEuler to local host.
2. Change the database from GaussDB to PostgreSQL.
3. Changed part of the front-end layout.
4. Attempted to use Docker to package GaussDB and run it on a local ARM-based server(MacBook M1 2020).
