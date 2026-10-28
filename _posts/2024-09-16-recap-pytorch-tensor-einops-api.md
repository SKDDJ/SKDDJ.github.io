---
layout: post
title: "Recap PyTorch Tensor & Einops API"
date: 2024-09-16 12:00:00
description: >
  简要回顾 PyTorch 中关于 Tensor 形状变换的 API（如 view, reshape, unsqueeze, squeeze）以及 Einops 库中
  rearrange, reduce, repeat 的用法。
categories: ["notes"]
math: true
---
在深度学习中，对 Tensor 的维度和形状变换是日常操作。本文简单介绍 PyTorch 的 Tensor 自带的 API（`view`, `reshape`, `unsqueeze`, `squeeze`）以及配合 [Einops](https://github.com/arogozhnikov/einops) 库进行维度重排、维度聚合和重复操作（`rearrange`, `reduce`, `repeat`）。

## 1. PyTorch Tensor 操作

### 1.1. `view` - 改变形状
`view` 主要用于改变张量的形状，但要求新形状必须与原始形状元素数量一致。

```python
import torch

# 创建一个 2x4 的张量
x = torch.randn(2, 4)

# 改变形状为 4x2
x_viewed = x.view(4, 2)
print(x_viewed.shape)  # torch.Size([4, 2])
```

### 1.2. `reshape` - 灵活的形状变化
`reshape` 与 `view` 类似，但它更灵活，如果有必要会生成新的内存。

```python
x_reshaped = x.reshape(4, 2)
print(x_reshaped.shape)  # torch.Size([4, 2])
```

### 1.3. `unsqueeze` - 添加一个维度
`unsqueeze` 用于在指定位置上添加一个维度。

```python
x_unsq = x.unsqueeze(1)  # 在维度1处加一个维度
print(x_unsq.shape)  # torch.Size([2, 1, 4])
```

### 1.4. `squeeze` - 去除多余的维度
`squeeze` 用于移除尺寸为1的多余维度。

```python
x_squeezed = x_unsq.squeeze(1)  # 去掉维度1的单一维度
print(x_squeezed.shape)  # torch.Size([2, 4])
```

## 2. Einops 的操作

### 2.1. `rearrange` - 重排维度
`rearrange` 允许根据给定的维度顺序重排张量。

```python
from einops import rearrange

# 假设我们有一个形状为 (batch, height, width, channels) 的张量
x = torch.randn(10, 64, 64, 3)

# 将其转换为PyTorch的标准格式 (batch, channels, height, width)
x_rearranged = rearrange(x, 'b h w c -> b c h w')
print(x_rearranged.shape)  # torch.Size([10, 3, 64, 64])

# 将batch和channel合并
x_combined = rearrange(x_rearranged, 'b c h w -> (b c) h w')

# 重新分开
x_cut = rearrange(x_combined, '(b c) h w -> b c h w')
```

### 2.2. `reduce` - 跨维度聚合
`reduce` 可用于在指定维度上进行聚合操作，比如平均、求和等。

```python
from einops import reduce

# 假设我们有一个 5D 张量，形状为 (batch, time, height, width, channels)
x = torch.randn(4, 8, 32, 32, 3)

# 对 time 维度进行平均
x_reduced = reduce(x, 'b t h w c -> b h w c', 'mean')
print(x_reduced.shape)  # torch.Size([4, 32, 32, 3])
```

### 2.3. `repeat` - 沿某维度重复
`repeat` 用于沿某个维度按照指定倍数复制元素。

```python
from einops import repeat

# 假设我们有一个形状为 (batch, height, width) 的张量
x = torch.randn(4, 32, 32)

# 沿着 height 维度重复 2 次
x_repeated = repeat(x, 'b h w -> b (h 2) w')
print(x_repeated.shape)  # torch.Size([4, 64, 32])
```
