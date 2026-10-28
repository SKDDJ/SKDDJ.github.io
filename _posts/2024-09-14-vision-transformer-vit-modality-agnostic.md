---
layout: post
title: "Vision Transformer (ViT) -> Towards a Modality-Agnostic Transformer?"
date: 2024-09-14 12:00:00
description: >
  This blog revisits the underlying principles of the Vision Transformer (ViT) and
  proposes explorations on extending the Transformer architecture to other modalities. For
  instance, in tasks such as "Weight2Weight," prior approaches have often simply flattened
  weights into one-dimensional tensors, without leveraging positional encodings.
categories: ["research"]
math: true
---
### Forward Process of Vision Transformer (ViT)

**Input Image**: $X \in \mathbf{R}^{H \times W \times C}$

$\downarrow$

**Patch Embedding**: $X_{patches} \in \mathbf{R}^{N \times (P^2 \times C)}$, where $N=\frac{H \times W}{P^2}$

> Transform the input image (2D) into a sequence of flattened tokens.

Transformation Matrix: $W \in \mathbf{R}^{(P^2 \times C) \times D}$

Resulting Tensor: $Y \in \mathbf{R}^{N \times D}$

**Concatenation** of a learnable class token: $\vec{x_{cls}} \in \mathbf{R}^{D \times 1}$

**Addition** of positional embeddings: $x_{pos} \in \mathbf{R}^{(N+1) \times D}$

Final Embedding:  
$x_{emb} = [\vec{x_{cls}}^T; X \cdot W] + x_{pos}$

$\downarrow$

### Encoder Layer with Residual Skip Connections

For each layer $l$, the encoding process follows a sequence of residual operations:

1. **Multi-Head Attention (MHA)**:
   $$x^{(l)'} = MHA(\text{LN}(x^{(l-1)})) + x^{(l-1)}$$

2. **Feed-Forward Network (FFN)**:
   $$x^{(l)} = FFN(\text{LN}(x^{(l)'}) + x^{(l)'})$$

In the MHA block, the query, key, and value matrices are defined as:

$$W_q^{(l)}, W_k^{(l)}, W_v^{(l)} \in \mathbf{R}^{D^{(l-1)} \times D_h^{(l)}}$$

The attention head computations are given by:
$$x_h^{(l)'} = AH_h(x_{norm}^{(l-1)}) = \mathrm{softmax}\left(\frac{x_{norm}^{(l-1)}W_q^{(l)} \cdot (x_{norm}^{(l-1)}W_k^{(l)})^T}{\sqrt{D_h^{(l)}}}\right)x_{norm}^{(l-1)}W_v^{(l)}$$

$\downarrow$

### Output Layer

The output of the multi-head attention is computed as:


$$x^{(l)'} = MHA(x_{norm}^{(l-1)}) = [AH_1(x_{norm}^{(l-1)}), ..., AH_m(x_{norm}^{(l-1)})]W_o^{(l)}$$

$\downarrow$

### Feed-Forward Network Layer

Finally, the FFN is applied:


$$x^{(l)} = FFN(x_{norm}^{(l)'}) = \mathrm{GELU}(x_{norm}^{(l)'} W_1^{(l)}) W_2^{(l)}$$
where $W_1, W_2 \in \mathbf{R}^{D^{(l)} \times 4D^{(l)}}$, and $x_{norm}^{(l)} = \mathrm{LN}(x^{(l)'})$.

---

In conclusion, while ViT has shown remarkable results in visual tasks by transforming input images into sequences of tokens, extending the Transformer’s architecture to other modalities remains an open area for exploration. For example, tasks such as "Weight2Weight" may benefit from modality-specific adaptations, especially in the representation of flattened high-dimensional data, where embedding strategies like positional encodings can be integrated in a more structured manner.
