---
layout: post
title: "Fine-Tuning Face Based on UniDiffuser"
date: 2023-09-03 12:00:00
description: >
  Some notes about architect of UniDiffuser and Stable Diffusion. YueGangAo AI Algorithm
  Competition.
categories: ["research"]
tags: ["diffusion", "peft"]
math: true
---
## 1. UniDiffuser

### 1.1 Architect
![DiffusionEncoder](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202308251937594.png)

![DiffusionDecoder](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202308251937656.png)


### 1.2 Optimization

* Block:
1. in-block: local
2. mid-block: Transition to prevent the network from experiencing rapid gradient decay.
3. out-block: global, skip connection

* Regularization
1. pos-dropout
2. residual dropout
3. attn dropout
4. proj dropout
5. label smoothing: smooth one-hot encoding
6. stochastic depth: skip block
7. weight decay

* Generalization
1. residual connection
2. layer norm
3. global token
4. data augmentation(crop flip)
5. model ensemble(multi-model combined to predict)
6. transfer learning
7. sufficient capacity(scale up the capacity and train steps)

### 1.3 Unidiffuser 的多模态对齐工作有：

虽然没有使用 cross attention，但是在 encoder 阶段相当于进行了一些图文的交互：

1. GPT 2 的img embedding 作为 prefix 重构 text
2. clip img 生成图像的 语义表征

decoder 阶段：

1. multi head  self attention，内部图文交互
    1. 考虑加入 cross attention 进行对齐，并进行微调
    2. 考虑加入 prior preservation 正则
    3. 考虑优化 clip text encoder 添加 modifier token
    4. 考虑加入 lora
![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202308251947394.png)

## 2. Stable Diffusion
### 2.1 Architect

![StableDiffusion](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202308251944420.png)
