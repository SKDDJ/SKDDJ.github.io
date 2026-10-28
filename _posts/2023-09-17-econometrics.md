---
layout: post
title: "Econometrics"
date: 2023-09-17 12:00:00
description: >
  课程笔记
categories: ["notes"]
tags: ["计量经济学", "Econometrics", "大三上"]
math: true
---
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202308301038752.jpg) ![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202308301039303.jpg)

## 成绩构成

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202308301040122.jpg)

## Lecture 1 Intro 第一章：计量经济学引论

Outline

- The Nature and Purpose of Econometrics
- Data
- Returns in Financial Modeling
- Steps involved in the formulation of econometric models45

### 1.1 计量经济学的概念与建模

Econometrics = use of statistical methods to analyze economic data

#### 1.1.1 Steps of Econometric Modeling

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202308301047378.jpg)

### 1.2 计量经济学在金融中的应用

Econometrics

- Econometric and financial Econometric
- Microeconometrics and Macroeconometrics
- Theoretical econometrics and applied econometrics

### 1.3 数据及其获取

The Nature of Econometrics and Economic Data

Typical goals of econometric analysis:

1.  Testing economic theories and hypotheses，estimating relationships between economic variables
2.  Evaluating and implementing government and business policy
3.  Forecasting economic variables

Different kinds of economic data sets：

- Cross-sectional data
- Time series data
- Pooled cross sections
- Panel/Longitudinal data

### 1.4 相关软件简介

## Lecture2 A brief review of classic linear regression 第二章：线性回归模型

Outlines:

- Linear Regression
- Ordinary Least Squares
- The Assumptions Underlying CLRM
- Properties of the OLS Estimator
- Hypothesis Test

### 2.0 Find a line of best fit

$$y = \alpha + \beta x  \ Equation(1)$$

note: $\alpha$ and $\beta$ are "coefficients" where: $\alpha$ is a "constant" or "intercept" term $\beta$ is a "slope coefficient".

$$\beta = \frac{\Delta y}{\Delta x} = \frac{y_{t+1}-y_{t}}{x_{t+1}-x_t}$$

#### 2.0.1 Add a random disturbance term $\epsilon$

$$y = \alpha + \beta x_t + \epsilon_t$$

where: t = 1,...,T

The disturbance term can capture a number of features:

- Other potentially important explanatory variables may be missing (e.g., Z and W)
- Measurement error
- Incorrect functional form
- Purely random and totally unpredictable occurrences

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202308301055553.jpg)

#### 2.0.2 Single Equation Linear Model

components:

1.  determinstic: $\alpha + \beta x$
2.  stochastic/random: $\epsilon_t$ why "determinstic": conditional expectation which means expectation value of Y Given X

### 2.1 多元回归模型的建模与估计 Different Ways of Expressing the Multiple Linear Regression Model

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309111719018.jpg)

#### 2.1.1 The OLS Estimator for the Multiple Regression Model

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309111724086.jpg)

#### 2.1.2 Calculating the Standard Errors for the Multiple Regression Model

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309111727756.jpg)

### 2.2 回归模型的拟合优度

### 2.3 OLS的经典假设与估计量性质

#### 2.3.1 Ordinary Least Squares

population regression -> sample/estimated regression

The empirical counterpart to Equation(1) is

$$\hat{Y_t} = \hat{\alpha} + \hat{\beta}x_t + \hat{\epsilon_t}$$

Optimized Function :

$$Min\ L = Min\sum\epsilon_t^2 = Min ||Y_t - \hat{Y_t} ||^2 = Min ||Y_t - \hat{\alpha} - \hat{\beta}x_t||^2$$

```
求导，微分方程等于零
解出 
```

$$\beta = \frac{\sum x_ty_t-T\overline x \overline y}{\sum x_t^2 - \overline x^2}$$

$$\alpha = \overline Y_t - \beta \overline x_t$$

#### 2.3.2 CAPM in Econometric

$$r_i = r_f + \beta(E(r_m)-r_f)+\epsilon_t$$

$$r_t - rf_t = \hat \alpha + \hat \beta(E(r_m - rf_t))$$

where $\hat \beta = \frac{cov(r_m,rf_t)}{var(r_t)}$

#### 2.3.3 The relationship between Regression and Corelationship

$$\hat b = \frac{cov(x,y)}{cov(x,x)} = \frac{cov(x,y)}{\sqrt{cov(x,x)} \sqrt{cov(y,y)}} \times \frac{\sqrt{cov(y,y)}}{\sqrt{cov(x,x)}} = r_{x,y} \frac{S_y}{S_x}$$

- PRF: Population Regression Function

$$Y_t = \hat \alpha + \hat \beta x_t + \hat \mu$$

- SRF: Sample Regression Function

$$Y_t = \hat \alpha + \hat \beta x_t $$

> sample is a selection set of population, we can use SRF to infer likely as PRF.

#### 2.3.4 Estimators & Estimates

- Estimators（估计量）: random/stochastic
- Estimates（估计值）: actual numerical value

#### 2.3.5 The Assumptions underlying in CLRM(Classic Linear Regression Model)

The seven classical assumptions are:

1.  The regression model is linear, is correctly specified, and has an additive error term
2.  The error term has a zero population mean
3.  All explanatory variables are uncorrelated with the error term
4.  Observations of the error term are uncorrelated with each other (no serial correlation)
5.  The error term has a constant variance (no heteroskedasticity)
6.  No explanatory variable is a perfect linear function of any other explanatory variable(s) (no perfect multicollinearity)
7.  The error term is normally distributed(this assumption is optional but usually is invoked)

(2) $E(\epsilon_t) = 0$

(3) $E(\epsilon_t|x_t) = 0 or cov(\epsilon_t|x_t) = 0$

(4) $cov(\epsilon_t|\epsilon_{t+k}) = 0 \ k \geq 1$

(5) $var(\epsilon_t) = \sigma^2$ special case: $var(\epsilon_t) = \sigma_t^2$

(6) $x_i \neq r_1x_{k1} + r_2x_{k2} + r_3x_{k3}+ ...$

(7) $\epsilon_t \ ~ N(0,\sigma^2)$

#### 2.3.6 Properties of OLS Estimator

If assumption 1 through 6 holds, $\hat \alpha$ and $\hat \beta$ are determined by OLS well known as BLUE

> BLUE: Best Linear Unbiased Estimator

1.  estimator: $\hat \beta$ is an estimator of the value of $\beta$
2.  linear: $\hat \beta$ is a linear variable
3.  unbiased: in average, $\hat \alpha$ and $\hat \beta$ are true value of $\alpha$ , $\beta$.
4.  best: means that the OLS estimator has minimum variance among the class of linear unbiased estimators

> The Gauss-Markov theorem proves that the OLS estimator is best.

$$ri_t - rf_t = \alpha + \beta(rm_t - rf_t) + \epsilon_t$$

where $\alpha$ is market pricing and $\epsilon_t \ ~ iid (0,\sigma^2)$

$$Y_t = \hat \alpha + \hat \beta X_t + \epsilon_t$$

$\epsilon_t \ ~ iid(0,\sigma^2)$ and $E(\overline X) = 0$

We have $\hat \alpha$ is the mean value of $\epsilon_t$.

#### 2.3.7 Addition

$$\hat \beta = (X'X)^{-1}X'Y = (X'X)^{-1}X'(X\beta + \epsilon)$$

$$E(\hat \beta) = \beta + E((X'X)^{-1}X'\epsilon) $$

where $E(\epsilon) = 0$

Then we get $E(\hat \beta) = \beta$

$$\hat \beta = \beta + E((X'X)^{-1}X'\epsilon)$$

We know

$$Var(\hat \beta) = Var(\beta + (X'X)^{-1}X'\epsilon) = 0 + Var((X'X)^{-1}X'E(\epsilon \epsilon')X(X'X)^{-1})$$

$$
\epsilon = 
\begin{bmatrix}
\epsilon_1  \\
\epsilon_2 \\
... \\
\epsilon_n \\
\end{bmatrix}
- 
\begin{bmatrix}
0 \\
0 \\
... \\
0 \\
\end{bmatrix}
$$

$$
Var(\epsilon) = E(\epsilon \epsilon') = E(\begin{bmatrix}
\epsilon_1^2 & \epsilon_1 \epsilon_2 & ... & \epsilon_1 \epsilon_n  \\
... & \epsilon_2^2 & ... & ... \\
\epsilon_n \epsilon_1 & ... & ... & \epsilon_n^2\\
\end{bmatrix})
=
\begin{bmatrix}
\sigma^2 & 0 & ... & 0  \\
... & ...& ... & ... \\
0 & ... & ... & \sigma^2 \\
\end{bmatrix}
= 
\sigma^2 I 
= \sigma^2(X'X)^{-1}
$$

We get $Var(\hat \beta) = \sigma^2 \epsilon(X'X)^{-1}$

Cz

$$y = \beta x + \epsilon$$

owing to $\epsilon\ iid(0,\sigma^2)$

and

$$y = \hat \beta x + \hat \epsilon$$

owing to $\hat \sigma^2$

#### 2.3.8 Precision and Standard Errors

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309111735728.jpg)

### 2.4 假设检验 Hypothesis Testing

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309121944650.jpg)

#### 2.4.1 One-Sided Hypothesis Tests

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309121946221.jpg)

#### 2.4.2 The Probability Distribution of the Least Squares Estimators

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309121948559.jpg)

#### 2.4.3 Testing Hypotheses: The Test of Significance Approach

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309121951487.jpg)

#### 2.4.4 The Confidence Interval Approach to Hypothesis Testing

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309122002415.jpg)

#### 2.4.5 Test Hypothesis

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309122004226.jpg)

#### 2.4.6 The Errors That We Can Make Using Hypothesis Tests

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309122005883.jpg)

### 2.5 实践性教学环节

## Lecture 3: Further development and analysis of the classical linear regression model 第三章：模型诊断检验

Classical linear regression model assumption and diagnositics

1.  The regression model is linear, is correctly specified, and has an additive error term
2.  The error term has a zero population mean
3.  All explanatory variables are uncorrelated with the error term
4.  Observations of the error term are uncorrelated with each other (no serial correlation)
5.  The error term has a constant variance (no heteroskedasticity)
6.  No explanatory variable is a perfect linear function of any other explanatory variable(s) (no perfect multicollinearity)
7.  The error term is normally distributed(this assumption is optional but usually is invoked)

### 3.1 违背经典假设的情形
$$Y = X\beta + \epsilon_t$$
$$\hat{\beta} = (X'X)^{-1}X'Y = \beta + (X'X)^{-1}X'\epsilon_t$$

$$Z = Var(\hat{\beta}) = E[(X'X)^{-1}X'\epsilon X(X'X)^{-1}] $$
$$=(X'X)^{-1}X'E(\epsilon \epsilon')X(X'X)^{-1} $$
$$=(X'X)^{-1}X'\Omega X(X'X)^{-1}$$

![case1](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310182037860.jpg)
![case2](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310182037190.jpg)
![case3](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310182038750.jpg)

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310182051700.jpg)

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310182051690.jpg)

### 3.2 多重共线性 Multicollinearity

#### 3.2.1 Types of multicollinearity
* Perfect multicollinearity
$$x_3 = 2x_2$$
* Imperfect multicollinearity
$$x_{1i} = x_{2i} + w$$

#### 3.2.2 5 Consequences of Multicollinearity

1. Estimates will **remain unbiased**
2. Variances and Standard errors will **increase**
3. **t-scores** will fall
4. Estimates will be very **sensitive** to changes in specification
5. Overfit

#### 3.2.3 Detection
1. High Simple Correlation coefficients
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310182048701.jpg)

2. High Variance Inflation Factors(VIFs)

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310182048459.jpg)


#### 3.2.4 Solutions to the Problems of Multicollinearity
1. Ridge Regression/ PCA
2. Collect more data
3. Data Transform
4. drop one of the collinear variables


### 3.3 序列相关性 Serial Correlationor or Autocorrelation
> We assumed of the 	CLRM’s 	errors that $Cov(u_i,u_j)=0$ for $i\neq j$ ,i.e.This is essentially the same as saying there is no pattern in the errors.
>
>  Obviously we never have the actual u’s,so we use their sample counterpart, the residuals (the$\hat u$). If there are patterns in the residuals from a model, we say that they are autocorrelated.

#### 3.3.1 Serial Correlated
1. Pure serial correlation

$$\epsilon_t = \rho \epsilon_{t-1} + \mu$$
where $\rho$ is the first order autocorrelation coefficient

and we can state that
$$ -1 < \rho < 1$$
2. Impure serial correlation

caused by specification error such as:
* an omitted variable 
* an incorrect functional form

#### 3.3.2 Detection Autocorrelation

##### 3.3.2.1 The Durbin-Watson Test

> The Durbin-Watson(DW) is a test for first order autocorrelation-i.e.it assumes that the relationship is between an error and the previous one

$$u_t = \rho u_{t-1} + v_t$$
where $v_t\ N(0,\sigma_v^2)$

The DW test statistic actually tests
$$H_0: \rho = 0 \ and\ H_1: \rho \neq 0$$

The test statistic is calculated by
$$DW = \frac{\sum_{t=2}^{T}(\hat{u_t} - \hat{u_{t-1}})^2}{\sum_{t=2}^T\hat{u_t}^2}$$

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310181950339.jpg)

we can also write 
$$DW \approx 2(1-\rho)$$

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310181955883.jpg)

##### 3.3.2.2 The Breusch-Godfrey Test

It's a more general test for $r^{th}$ order autocorrelation
$$u_t = \rho_1u_{t-1} + \rho_2u_{t-2} + ... + \rho_ru_{t-r} + v_t$$
where $v_t \ N(0,\sigma_v^2)$

The Null and alternative hypotheses are:
* $H_0: \rho_1 = 0 \ and\ \rho_2 = 0 \ and ... and\ \rho_r = 0$
* $H_1: \rho_1 \neq 0 \ or \ \rho_2 \neq 0\ or ... or\ \rho_r \neq 0$

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310182004620.jpg)

##### 3.3.2.3 LM-Test


#### 3.3.3 Remedies for Autocorrelation
##### 3.3.3.1 Quasi-differenced
 ![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310182030815.jpg)
 
 ##### 3.3.3.2 GLS
 $$y_t = \beta x_t + \epsilon_t \ (1)$$
 $$\epsilon_t = \rho \epsilon_{t-1} + v_t \ (2)$$
 Build 
 $$\rho y_{t-1} = \rho \beta x_{t-1} + v_t\ (3)$$
 
 $(1) - (3)$ we obtain 
 $$y_t - \rho y_{t-1} = \beta(x_t - \rho x_{t-1}) + v_t\ (4)$$
 
 $\beta$s in (1) and (4)  are not same one.
 
 
 ##### 3.3.3.3 Add lag dependent variable
 
 
 ##### 3.3.3.4 Newey-West Heteroscedasticity Autocorrelation Consistent Covariance Estimator
 ![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202310182035374.jpg)
 
 


#### 3.3.4 
##### 3.3.4.1 Dynamic Models

Static models:
$$y_t = \beta_1 + \beta_2x_{2t} + ... + \beta_kx_{kt} + u_t$$

Dynamic models:
$$y_t = \beta_1 + \beta_2x_{2t} + ... + \beta_kx_{kt} + \gamma_1y_{t-1} +...+\gamma_kx_{kt-1} + u_t$$

which includes $(y_t - \rho y_{t-1})$ or $(y_t - \gamma_1 y_{t-1})$

##### 3.3.4.2 Models in First Difference Form

Denote the first difference of $\Delta y_t = y_t - y_{t-1}$
and $\Delta x_{2t} = x_{2t} - x_{2t-1}$

The model would now be:
$$\Delta y_t = \beta_1 + \beta_2 \Delta x_{2t} + ... + \beta_k \Delta x_{kt} + u_t$$

Sometimes the change in y purported to depend on previous values of y or xt as well as changes in x:
$$\Delta y_t = \beta_1 + \beta_2 \Delta x_{2t-1} + ... + \beta_k \Delta y_{t-1} + u_t$$

 

### 3.4 异方差性 Heteroscedastisity

#### 3.4.0 Difference between Heteroskedasiticity and Homoskedasiticity

1. Homoskedasiticity
$$\Omega = E(\epsilon \epsilon') = \begin{bmatrix}
\epsilon_1  \\
\epsilon_2 \\
... \\
\epsilon_n \\
\end{bmatrix} 

[\epsilon_1, ... , \epsilon_n] $$

$$=\begin{bmatrix}
\sigma_1^2, ... , 0 \\
... \\
0,..., \sigma_n^2 \\
\end{bmatrix}
$$

$$=\sigma^2\begin{bmatrix}
1, ... , 0 \\
... \\
0,..., 1 \\
\end{bmatrix}
$$

$$=\sigma^2I$$


And 
$$Var(\hat{\beta}) = (X'X)^{-1}X'\sigma^2IX(X'X)^{-1} = \sigma^2(X'X)^{-1}$$

2. Heteroskedasiticity
$Cov(X_i,X_j) = 0$
and 
$Var(\epsilon_t) = \sigma_t^2 < \infty$

$$\Omega = E(\epsilon \epsilon') = \begin{bmatrix}
\sigma_1^2, ... , 0 \\
... \\
0,..., \sigma_i^2 \\
\end{bmatrix}
$$



#### 3.4.1 Pure and Impure heteroscedastisity

Impure caused by omitting explainary variable.

#### 3.4.2 Assumption 1-4 & 5

If model observes 1-4 then we can say the model is BLUE If model observes 5 we can use test-statistic

#### 3.4.3 Detectation of heteroscedastisity

1.  Graphic Test
2.  GQ-Test

split samples into 2 parts and compare the varirance of these two parts. The null hypothesis is that the variances of the disturbances are equal,

$$H_0 : \sigma_1^2 = \sigma_2^2$$

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309251646310.jpg)

3.  Park-Test

$$e_i = Y_i - \hat{Y_i} = Y_i - (\hat{\beta_0} + \hat{\beta_1}X_{1i} +\hat{\beta_2}X_{2i})$$

$$ln(e_1^2) = \alpha_0 + \alpha_a lnZ_1 + u_i$$

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309251647591.jpg)

4.  White-Test

$$e_i^2 = \alpha + \beta(X_1 + X_2 + X_3 + X_1X_2 + ...) + u$$

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309251649078.jpg)

> The 3 and 4 mean that there's omitted variable in error iterm.

**LIKE**

$$Y = \alpha + \beta X + u$$

and $u$ is composed of $x_i$ and $z_i$ which $z_i$ we don't add it to explainary variable.

#### 3.4.4 Remedies for heteroskedastisity

There are two main remedies for pure heteroskedasticit:

1.Heteroskedasticity-corrected standard errors

2.Redefining the variables

$$\frac{y}{z_i} = \frac{\alpha}{z_i} + \beta_1 \frac{x_1}{z_i} + ...$$

1.  use $logs$ 缩放量纲
2.  理论上 White

$$Var(\hat{\beta}) = \sigma^2(X'X)^{-1}$$

实际上由于异方差性，我们“数据驱动”的用实际数据计算：

Calculate $Var(\epsilon*) = Var(\beta - \hat{\beta})$ directly.


$$Var(\hat{\beta}) = E[(X'X)^{-1}X'(\epsilon \epsilon')X(X'X)^{-1}]$$

$$= (X'X)^{-1}X'E(\epsilon \epsilon')X(X'X)^{-1}$$

$$= (X'X)^{-1}(\sum\hat{\epsilon_i}^2X_iX_i')(X'X)^{-1}$$

$$\to^{\beta}$$

依概率收敛于$(\sum\epsilon_iX_iX_i')$

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202309251639698.jpg)

1. Refomulating the Equation
$$\frac{Y_i}{Pop} = \alpha_0 + \beta_1\frac{Reg_i}{Pop} + \beta_2 Price_i + \epsilon_i$$

2. Weighted Least Square
$$\frac{Y_i}{Abs(\epsilon_i)} = \alpha_0 + \beta_1Reg_i+ \beta_2 Price_i + \frac{\epsilon_i}{Abs(\epsilon_i)}$$

3. A double-log functional form
$$Y = \alpha_0 + \beta_1lnReg_i + \beta_2 ln Price_i + \epsilon_i $$

4. White Method above


### 3.5 模型设定问题

### 3.6 参数稳定性检验

### 3.7 测量误差

### 3.8 计量经济学建模策略

### 3.9 实践性教学环节

## 第四章：含虚拟变量的回归模型

### 虚拟变量模型的设计

### 虚拟变量的应用

### 二元选择模型

### 多元选择模型

### 实践性教学环节

## Lecture 5 Autorelation 第五章：时间序列模型

### ARMA模型

### 平稳性与单位根检验

### ARIMA模型

### 时间序列模型预测

### 协整及其检验

### 误差修正模型

### 实践性教学环节

## 第六章：多方程模型

### 联立方程模型

### 向量自回归模型

### 脉冲响应和方差分解

### 实践性教学环节

## 第七章：波动性与相关性建模

### 波动率建模

### ARCH模型与GARCH模型

### GARCH模型的扩展

### 多元GARCH模型

### 实践性教学环节
