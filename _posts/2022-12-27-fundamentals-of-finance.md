---
layout: post
title: "金融学基础"
date: 2022-12-27 12:00:00
description: >
  关于金融学基础的课程笔记。其中包括了金融的概念，个人/家庭和企业的金融决策，资金流动与金融系统，金融市场的类型，金融系统的功能等内容。
categories: ["notes"]
tags: ["金融学基础", "大二下", "Finance"]
math: true
---
## 1.1. Module1 金融和金融系统

### 1.1.1. 金融的概念,含义及学科体系

> 概念: 金融学是研究人们如何在不确定环境下跨时期进行稀缺资源配置的学问

金融学三大支柱: 3 issues in finance：

- 跨时期优化
- 风险管理
- 资产估值

资产收益 = 风险补偿 \+ 无风险收益

> 实例: 伊犁州东西运河

#### 1.1.1.1. 个人/家庭的金融决策

- 投资决策(Investment Decision) 钱向哪去?
- 融资决策(Financing Decision) 钱从哪来?
    - 对抗时间
- 风险管理决策(Risk Management Decision) 抵抗风险
    - 对抗不确定性

#### 1.1.1.2. 企业的金融决策

- 战略规划(Strategy Planning)
- 资本预算/投资决策(Captital Budget/Investment Decision)
- 资本结构/融资决策(Capital Structure/Financing Decision)
    - 股票or债券
- 营运资本管理决策(Working Capital Management Decision)
    - $流动资产(Current Assests)-流动负债(Current Liability)=净营运资本(Net Working Capital)$
- 股利决策(Dividend Decision)
    - 债权人(优先获得利息或者到期本金)
    - 股东(剩余索偿权 Residual Claim)
- 风险管理决策(Risk-management Decision)
    - 投资失败or成本上升

### 1.1.2. 资金流动与金融系统

> 金融系统(Financial System): 通过一系列的金融资产/合约交易(包括各种风险的交易), 帮助个人/家庭,企业或政府执行各种金融决策的系统;
> 
> - 金融市场(交易所市场,场外市场...)
> - 金融中介(商业银行,投资银行...)
>     - 商业银行主要依靠贷款，资产负债表特点是负债率高
>     - 投资银行主要业务是： IPO和SEO，还提供咨询服务
> - 服务公司(信用评级公司,投资咨询公司...)
>     - 保险公司 保费和利率成反比
> - 其他机构(监管部门,非营利性机构...)

#### 1.1.2.1. 直接的资金流动

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212282023975.png)

红色箭头中有潜在的*搜索成本(Searching Cost)以及信用风险(Credit Risk)*

#### 1.1.2.2. 通过"金融中介"的资金流动

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212282026076.png)

#### 1.1.2.3. 通过"金融市场(Financial Market)"的资金流动

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212282027155.png)

#### 1.1.2.4. 先通过"金融中介",再通过"金融市场"的资金流动

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/picgoimgbed/202212282028330.png)

### 1.1.3. 金融市场的类型

根据是否有交易地点分类:

- 交易所市场(Exchanges)
    - xxx交易所
- 场外市场(Over-the-counter Market,OTC)
    - 纳斯达克交易市场

根据合约特征分类:

根据金融产品的期限分类:

### 1.1.4. 金融系统的功能

- 清算与结算(Clearing and Setting Payments)
- 跨时间和空间转移资源(Transferring Resources across Time or Space)
- 风险管理(Managing Risk)
    - 风险分散 Diversifying
    - 风险对冲 Hedging
    - 期权/保险 Insuring
- 集合资源和分割股份(Pooling Resource & Subdividing Shares)
- 提供信息(Providing Information)
- 处理激励问题(Dealing with the Incentive Problems)

#### 1.1.4.1. 处理激励问题(Dealing with the Incentive Problems)

> 银行提高利率无法解决激励问题，可以通过信贷配给（credit rationing）抵押贷款的形式解决这个问题。

- 信息不对称与激励问题(Information Asymmetry and Incentive Problem)
    - 事后隐藏行动-道德风险(Moral Hazard) 变更资金使用用途
        - 通过保险/贷款条款的设计
        - 募集资金使用的监管方法
        - 分阶段投资
    - 事先隐藏类型-逆向选择(Adverse Selection) 二手车市场
        - 解决方法：信号传递(Signaling)和甄别(Screening)
        - 学校文凭和各种证书
        - 抵押collateralized担保guaranteed贷款

## 1.2. Module2 资金时间价值与跨时期优化

### 1.2.1. 资金时间价值(Time value of Money)的概念

现值（Present Value）比终值/将来值（Future Value）更有价值

$$FV = PV\times (1+i)^n$$

- i : interest rate
- n: times
- 资金具有时间价值 \* 人们的选择偏好
    - 机会成本
    - 不确定性因素

（无风险）利率是将来消费和现在消费的边际替代率。

#### 两种利率计算方法

- 单利（single interest）只在本金上计算
- 复利（compound interest）利滚利

这里有几个公式需要会用，不难但是需要理解：

- 根据年度复合利率计算月度复合利率
- 根据将来值和现值计算年度复合利率
- 可以参考spoc上的测验题

##### Compound & single

##### the rule of 72:

the years to double is :

$$Y = \frac{72}{n}:where\ n\ is\ the\ interest\ rate$$

### 1.2.2. 复利,计息频率与有效年利率

- Annual percentage rate: APR 挂牌年利率
- Effective annuanl rate: EFF 有效年利率

$$EFF(APR,m) = (1+\frac{APR}{m})^m -1$$

- where $m$ is 记息频率

### 1.2.3. 年金与分期摊还

- annuity 年金

#### Ordinary Annuity

$$PV = PMT\times \frac{1-(1+i)^{-n}}{i}$$

可用于等额本息计算那个PMT/C

$$FV = PMT\times \frac{(1+i)^n-1}{i}$$

#### Perpetual Annuity

$$PV = \frac{PMT}{i}$$

### 1.2.4. 个人生命周期规划

#### Human Capital

![4d7dd5d35b6f356d0cad8dfcef1d2c18.png](:/281208c9033b4dda9ff886e375137af4)

#### 跨时期预算约束 The = Budget Constraint

![72516c7412b6192ee07e26dfc30d2ba7.png](:/285132602ddf4f4da7197cc963ca2f3d)

### 1.2.5. 资本预算决策与净现值法则

- Net Present Value: NPV 净现值
- Internal Return Rate： IRR 内部收益率 Net Income = Revenue - Expenses - Taxes Cash Flow = Net Income - NonCash Expenses 关于值不值得投资的三个参考：
- NPV
- IRR
- Payback Period

> NPV更看重时间价值和折现率（融资） IRR更看重回报率（投资） Payback Period更看重回本时间

折现NPV可以判断是否值得投资 令折现公式等于0可以算出IRR

##### NPV Rule

if NPV > 0, then invest.

$$NPV = \sum_{t=0}^{n}\frac{CF_t}{(1+k)^t}$$

- forecasting cash flow($CF_t$)
- discount rate(k):
    - opportunity cost
    - market capitalization rate
    - cost of capital
    - required return

#### Loan Amortization

- 等额本金
    - 每个月还的本金固定，利息从剩下的还款中计算
- 等额本息
    - 每个月还的总金额固定

#### loan payment formula

$$Remaining\ Balance =P(1+r)^n - (PMT * (((1+r)^n - 1) / r))$$

#### Working Capital

关于会计利润（Account Profit）$\to$现金流$\to$NPV

##### Sensitivity Analysis

##### Break-even Point

- 通常不光计算金额还要计算销量

$$WK = LA - LL$$

which is :

$$Working\ Capital = Liquidity\ assets - Liquidity\ Liability$$

计算时看作必要投资 WK增加Cash Flow减少

- 因为存货增加 现金流减少
- 应收帐款增加 现金流减少
- 短期负债增加 现金流增加

## 1.3. Module3 资产估值原理与债券,股票估值

Chapter 9 Valuation of common stocks

### 1.3.1. 账面价值与市场价值

### 1.3.2. 信息,价格与有效市场假说(EMH)

### 1.3.3. 一价定律与债券估值

### 1.3.4. 股利折现模型(DDM)

Discounted Dividend Model(DDM)

- cash flow: Dividend or future price
- Discount rate:Expected rate of return Stocks:

$$D_0 = \sum_{i=1}^{\infty}\frac{D_t}{(1+k)^t}$$

$$= \frac{D_1}{(1+k)} + \frac{P_1}{(1+k)}= \frac{D_1}{(1+k)} + \frac{D_2}{(1+k)^2} + \frac{P_2}{(1+k)^2}$$

compared to Bonds:

- uncertainty
- four factors...

#### Simply the Model

Assumption:

1.  Dividends are constant
2.  A constant growth rate

$$D_0 = \sum_{t=1}^{\infty}\frac{D_t}{(1+k)^t} = \sum_{t=1}^{\infty}\frac{D}{(1+k)^t} = \frac{D}{K}$$

$$P_0 = \frac{D}{K} = \frac{E}{K} \to \frac{D_0}{E} = \frac{1}{k}$$

#### Constant-Growth-Rate DDM

$$D_t = D_1(1+g)^{t-1}$$

$$D_0 = \frac{D_1}{k-g}$$

公比：$\frac{1+k}{1+g}$

> if $g > k$ then the $P_0$ doesn't depend on Dividend

$$P_0 = \frac{D_1}{k-g} \to k = \frac{D_1}{P_0} + g = \frac{D_1}{P_0} + \frac{P_1-P_0}{P_0}$$

here k is Required return(Risk adjusted) $\frac{D_1}{P_0}$ = Dividend $\frac{P_1-P_0}{P_0}$ = yield + Capital gain

### 1.3.5. 基于盈利与投资机会的股票估值模型

#### Earnings and Investment Opprtunity

$$E_t = D_t + RE_t$$

$$D_t = E_t - NetI_t$$

$$= E_t - (GrossI_t - Depreciation_t)$$

$$= CF_t - GrossI_t$$

##### then we have

$$Dividends_t = Earning_t - Net\ Investment_t$$

$$P_0 = \sum_{t=1}^{\infty}\frac{D}{(1+k)^t} = \sum_{t=1}^{\infty}\frac{E_t}{(1+k)^t}-\sum_{t=1}^{\infty}\frac{I_t}{(1+k)^t}$$

$\sum_{t=1}^{\infty}\frac{E_t}{(1+k)^t}-\sum_{t=1}^{\infty}\frac{I_t}{(1+k)^t}$ is NPV

$$P_0 = \frac{E_t}{k} + NPV\ of\ future\ Investment$$

#### Growth Rate

$$\Delta Earnings = Reinvestment \times Return\ on\ Reinvestment$$

$$= Retained\ earning \times Return\ on\ Reinvestment$$

$$= earnings \times Retention\ Rate \times Return\ on\ Reinvestment$$

##### (Both side divided by earnings)

Then

$$g = \frac{\Delta earnings}{earnings} = Retention\ Rate \times Return\ on\ Reinvestment$$

> Rate of return on future investment compared to "Market Capitalization rate"

## 1.4. Module4 风险管理概述 Risk Management

### Chapter 11

**Terminologies**

- aversion 厌恶
- underlying asset 标定资产
- Spot price 现货价格
- long position 多头位置/看涨
- short position 空头位置/看跌
- A call& A put 买入/卖出 option（看涨/跌 option）
- Strike or exercise price 敲定/行权/执行价格
- Expiration or maturity date
- European or American type 美式期权可以随时执行
- Out/In/At of the money 价外/内/中（赚钱为内）
- Tangible(Intrisic) value 内在/执行价值

### 1.4.1. 风险的概念与测度

The concept of risk

$$Uncertainty \neq risk$$

### 1.4.2. 风险管理的基本框架

Risk aversion & premium

- Utility function U(W)
- Premium
- Certainty Equvalent

![](/Users/shiym/Library/CloudStorage/OneDrive-6x26s6/Pictures/IMG_0620.HEIC)

#### Three dimensions of risk transfer

- Hedging Ch14: Forward and Future markets
- Insuring Ch15 Option Markets
- Diversifying Ch12/13 Portfolio selection Theory/Capital Market Equilibrium(CAPM)

#### Swap Contract

LIBOR

### 1.4.3. 分散化的基本原理:系统风险与非系统风险

### 1.4.4. 对冲的基本原理:远期,期货与互换

### 1.4.5. 保险的基本原理:期权相关概念

#### Insuring

Features of Insurance Contracts

- Exclusion
- Caps: upper limit
- Deductibles
- Copayments

#### Options as Insurance

Difference from futures: deliver or abandon ![](/Users/shiym/Library/CloudStorage/OneDrive-6x26s6/Pictures/IMG_0621.heic)

## 1.5. Module5 组合选择理论与资本资产定价模型

### 1.5.1. 风险资产与风险资产的组合过程

#### Portfolio of many risky assets

![](/Users/shiym/Documents/credits_system/WechatIMG408.jpeg)

### 1.5.2. 无风险资产与风险资产的组合过程

#### The optimational portfolio of risy assets

![](/Users/shiym/Documents/credits_system/WechatIMG409.jpeg)

$$E[rp] = rf + \frac{E[rT]-rf}{\delta T}\delta p$$

#### Efficient trade-off line

$$rp = rf + \frac{\vec{r_T}-rf}{\delta T}\delta p$$

$\frac{\vec{r_T}-rf}{\delta T}\delta p$是风险补偿

### 1.5.3. 两基金分离定理

#### Two-funds seperation Theory

all investors can create an optimal portfolio by combining a risk-free asset with a market portfolio of risky assets.

### 1.5.4. 资本市场均衡与资本市场线(CML)

#### Equlibrium: The Capital Market Line(CML)

$$E(r_p) = r_f + \frac{E(r_M)-r_f}{\delta_M}.\delta p$$

### 1.5.5. 证券市场线(SML)

### 1.5.6. CAPM的推导及综合应用

#### CAPM

Market Portfolio = tengency portfolio ![pic](/Users/shiym/Documents/FinalCut/picbed/%E5%9B%BE%E5%83%8F.jpeg)

$$\left\{\begin{aligned}& E(r_p) = r_f + \frac{[E(r_M)-r_f]}{\delta_M}.\delta_p \\& \delta_p^2 = w_f^2\delta_f^2+w_M^2\delta_M^2+2w_fw_M\delta_f\delta_M\rho_{fM}\end{aligned}\right.$$

where:

- $[E(r_M)-r_f]$ is market risk premium
- $\frac{1}{\delta_M}.\delta_p$ is Weight on portfolio
- $\frac{[E(r_M)-r_f]}{\delta_M}.\delta_p$is compensation for bearing risk(risk premium)
- $\frac{[E(r_M)-r_f]}{\delta_M}$ is market price of risk

and we have

$$\delta_p = w_M\delta_M$$

$\to$

$$E(r_p) = r_f + w_M(E(r_M)-r_f)$$

$$E(r_p) = w_fr_f + w_ME(r_M) $$

> $$\delta_p^2 = \frac{1}{n}\bar{\delta}^2 +\frac{n-1}{n}\bar{Cov} \ (non-diversifiable) $$


Owing to the **One Price Law**:

$$E(r_p) = r_f + \frac{Cov(r_M,r_i)}{\delta_M^2}.E(r_M-r_f)$$

### CAPM(Capital Asset Pricing Model)

$$E(r_i) = r_f + \beta_i[E(r_M) - r_f] $$

where

- $r_f$ is compensation for delaying consumption
- $\beta_i[E(r_M) - r_f]$ is Reward for bearing market risk

$$\beta_i = \frac{Cov(r_M,r_f)}{\delta_M^2}$$

- $\beta$ of market portfolio is 1
- $\beta$ is the weighted average of individuel stock's $\beta$

## 1.6. Module6 期货与期权定价与风险管理

### Chapter 14 Forward and Future Markets

#### Concepts & Differences between Forward and Futures

- Forward is customized
- Futures is liquidity

#### The function of futures

- Hedging
- Speculators
- Arbitragues

### 1.6.1. 期货-现货平价关系

#### Spot-Futures Price Parity

(Cost of Carry Model)

- Commodity Futures: Owing to the One Price Law $\to$

$$F = (1 + h + r_f)S_0$$

where:

- $F$ is delivery price
- $h$ is Storage cost
- $r_f$ is risk-free interest rate(funding cost)
- $S_0$ is current spot price Stock futures: Cost(h) = 0,$F=(1+r_f)^TS_0$ Bonds futures: Complex

### 1.6.2. 套期保值的基本原理

$$Spot = Future + Bond$$

we get future can be reduplicated cause we can sell short spot

#### Replication of Non-dividend Stock

Using bond and future contract

$$S = \frac{F}{1+r_f}$$

#### Replication of Pay-dividend Stock

$$S = \frac{D+F}{1+r_f}$$

$$F = S + r_f.S-D$$

> if $D > r_f.S$, the basis price is negative

### Coverd Interest-Rate Parity(CIRP)

the relationship between the spot exchange rate, the forward exchange rate, and the interest rates in two different countries. According to CIRP, the difference between the interest rates in two countries should be equal to the forward premium or discount of their currencies.

### 1.6.3. 期货的杠杆机制与投机交易

08/06/2023 15:19

#### Ch15 Market for Option & Continent Claims

### 1.6.4. 看涨-看跌期权平价关系

#### Put-Call Parity

$$C+E(1+r)^{-T}=P+S$$

With Present Value Dividend D:

$$C+E(1+r)^{-T} = P + (1-d)^{T}S$$

Where $D=d\times S$

#### Sythetic Security(Replication)

Owing to One Price Law

$$C + B = P + S$$

and we have:

$$Futures = S - B = C - P$$

### 1.6.5. 二项式期权定价模型

#### Two State binominal option pricing model

(one step tree)

$$C = x.S - \frac{y}{1+r_f}$$

$$P = -x.S+\frac{y}{1+r_f}$$

where: x is hedging ratio = $\frac{\Delta C}{\Delta S}$

### 1.6.6. 二阶段二项式期权定价:动态复制技术

#### Dynamic Replication Technique of option pricing

(two step tree)

> and there maybe some questions about calculation

### 1.6.7. Black-Scholes期权定价公式

#### Black-Scholes of option pricing

owing to the two step tree: we have :

$$C = x.S - \frac{y}{1+r_f}$$

and

$$C = N(d_1)\times S - E.N(d_2).e^{-rT}$$

these two fomulas coresponding arugments are equal.

### 1.6.8. 或有权益分析:股东权益与债务的期权特征

## 1.7. Module7 公司金融系统

### 1.7.1. 实物期权的概念

### 1.7.2. 实物期权与金融期权的联系与区别

### 1.7.3. 资本结构无关性定理(MM定理I)

### 1.7.4. 最优资本结构理论

### 1.7.5. 加权资本成本的估计

### 1.7.6. 企业股利政策(MM定理II)
