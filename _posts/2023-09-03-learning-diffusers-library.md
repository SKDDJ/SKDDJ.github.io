---
layout: post
title: "Learning Diffusers Library"
date: 2023-09-03 12:00:00
description: >
  Learning Notes of Diffusers Course by HuggingFace. About how to create a pipeline of
  diffusion model from zero.
categories: ["notes"]
tags: ["diffusion"]
math: true
---
# Diffusers

## Unit1: An Introduction to Diffusion Models

Train diffusion model through:
1. Load in some images from the training data
2. Add noise, in different amounts. Remember, we want the model to do a good job estimating how to 'fix' (denoise) both extremely noisy images and images that are close to perfect.
3. Feed the noisy versions of the inputs into the model
4. Evaluate how well the model does at denoising these inputs
5. Use this information to update the model weights

### 1.1 DataSets and Dataloder

download online datasets and do some data augmentation
```python
import torchvision
from datasets import load_dataset
from torchvision import transforms

dataset = load_dataset("huggan/smithsonian_butterflies_subset", split="train")

# Or load images from a local folder
# dataset = load_dataset("imagefolder", data_dir="path/to/folder")

# We'll train on 32-pixel square images, but you can try larger sizes too
image_size = 32
# You can lower your batch size if you're running out of GPU memory
batch_size = 64

# Define data augmentations
preprocess = transforms.Compose(
    [
        transforms.Resize((image_size, image_size)),  # Resize
        transforms.RandomHorizontalFlip(),  # Randomly flip (data augmentation)
        transforms.ToTensor(),  # Convert to tensor (0, 1)
        transforms.Normalize([0.5], [0.5]),  # Map to (-1, 1)
    ]
)


def transform(examples):
    images = [preprocess(image.convert("RGB")) for image in examples["image"]]
    return {"images": images}


dataset.set_transform(transform)

# Create a dataloader from the dataset to serve up the transformed images in batches
train_dataloader = torch.utils.data.DataLoader(
    dataset, batch_size=batch_size, shuffle=True
)
```

iterate images and print shape
```python
xb = next(iter(train_dataloader))["images"].to(device)[:8]
print("X shape:", xb.shape)
show_images(xb).resize((8 * 64, 64), resample=Image.NEAREST)
```

### 1.2 Scheduler
Paper: [DDPM](https://arxiv.org/abs/2006.11239)
$$q(x_t|x_{t-1}) = N(x_t;\sqrt{1-\beta_t}x_{t-1},\beta_tI)$$
$$q(x_{1:T}|x_0) = \prod_{t=1}^{T}q(x_t|x_{t-1})$$
where:$x_{t-1}$ scaled by $\sqrt{1-\beta_t}$ add noise scaled by $\beta_t$

get $x_t$ for any $t$ given $x_0$:
$$q(x_t|x_0) = N(x_t;\sqrt{\overline{\alpha_t}}x_0,(1-\overline{\alpha_t})I)$$
where: $\overline{\alpha_t} = \prod_{i=1}^{T}\alpha_i$  and $\alpha_i = 1 - \beta_i$

and in code:
$\sqrt{\overline{\alpha_t}}$ : `sqrt_alpha_prod`;
$\sqrt{1-\overline{\alpha_t}}$:`sqrt_one_minus_alpha_prod`

> NB: if images sizes are small, "cosine scheduler" is better.

 ### 1.3 Train Loop
 1. set noise scheduler
`noise scheduler = DDPMScheduler(num_train_timesteps = 1000, beta_schedule="squaredcos_cap_v2")`

2. set optimizer
`optimizer = torch.optim.AdamW(model.parameters(), lr = 4e-4)`

`losses = []`

3. loop

```python
for epoch in range(30):
	 for step, batch in enumerate(train_dataloder):
			clean_images = batch["images".to(device)]
			# sample noise to add to the images
			noise = torch.randn(clean_images.shape).to(clean_images.device)
			bs = clean_images.shape[0]
			# sample a random timestep for each image
			timesteps = torch.randint(
            0, noise_scheduler.num_train_timesteps, (bs,), device=clean_images.device
        ).long()

        # Add noise to the clean images according to the noise magnitude at each timestep
        noisy_images = noise_scheduler.add_noise(clean_images, noise, timesteps)

        # Get the model prediction
        noise_pred = model(noisy_images, timesteps, return_dict=False)[0]

        # Calculate the loss
        loss = F.mse_loss(noise_pred, noise)
        loss.backward(loss)
        losses.append(loss.item())

        # Update the model parameters with the optimizer
        optimizer.step()
        optimizer.zero_grad()

    if (epoch + 1) % 5 == 0:
        loss_last_epoch = sum(losses[-len(train_dataloader) :]) / len(train_dataloader)
        print(f"Epoch:{epoch+1}, loss: {loss_last_epoch}")
```

### 1.4 Sampling Loop

```python
# Random starting point ( 8 random images)
sample = torch.randn(8,3,32,32).to(device)
for i,t in enumerate(noise_scheduler.timesteps):
	# get model pred
	with torch.no_grad():
		residual = model(sample, t).sample
	# update sample with step
	sample = noise_scheduler.step(residual, t, sample).prev_sample
show_image(sample)
```

#### plotting the loss
```python
fig, axs = plt.subplots(1, 2, figsize=(12, 4))
axs[0].plot(losses)
axs[1].plot(np.log(losses))
plt.show()
```

### 1.5 Generate Images with pipeline
#### 1.5.1 use pipeline
```python
from diffusers import DDPMPipeline

image_pipe = DDPMPipeline(unet=model, scheduler=noise_scheduler)

pipeline_output = image_pipe()
pipeline_output.images[0]

```
#### 1.5.2 use sampling loop
```python
# Random starting point (8 random images):
sample = torch.randn(8, 3, 32, 32).to(device)

for i, t in enumerate(noise_scheduler.timesteps):

    # Get model pred
    with torch.no_grad():
        residual = model(sample, t).sample

    # Update sample with step
    sample = noise_scheduler.step(residual, t, sample).prev_sample

show_images(sample)

```

The noise_scheduler.step() function does the maths required to update sample appropriately.

### 1.6 Scaling up with Accelerate
example:
```shell
accelerate launch train_unconditional.py \
  --dataset_name="huggan/smithsonian_butterflies_subset" \
  --resolution=64 \
  --output_dir={model_name} \
  --train_batch_size=32 \
  --num_epochs=50 \
  --gradient_accumulation_steps=1 \
  --learning_rate=1e-4 \
  --lr_warmup_steps=500 \
  --mixed_precision="no"

```


### Some Additional Resources
The Annotated Diffusion Model is a very in-depth walk-through of the code and theory behind DDPMs with maths and code showing all the different components. It also links to a number of papers for further reading.

Hugging Face documentation on Unconditional Image-Generation for some examples of how to train diffusion models using the official training example script, including code showing how to create your own dataset.

AI Coffee Break video on Diffusion Models: https://www.youtube.com/watch?v=344w5h24-h8

Yannic Kilcher Video on DDPMs: https://www.youtube.com/watch?v=W-O7AZNzbzQ

## Unit2: Fine-Tuning, Guidance and Conditioning
In this Unit we will look at how this process can be modified to add additional control over the model outputs through extra conditioning (such as a class label) or with techniques such as guidance

* Create a sampling loop and generate samples faster using a new scheduler
* Fine-tune an existing diffusion model on new data, including:
	* Using gradient accumulation to get around some of the issues with small batches
	* Logging samples to Weights and Biases during training to monitor progress (via the accompanying example script)
	* Saving the resulting pipeline and uploading it to the hub
* Guide the sampling process with additional loss functions to add control over existing models, including:
	* Exploring different guidance approaches with a simple color-based loss
	* Using CLIP to guide generation using a text prompt
	* Sharing a custom sampling loop using Gradio and 🤗 Spaces

### 2.1 Ways to pass in conditioning information

1. Feeding it in as additional channels in the input to the UNet. This is often used when the conditioning information is the same shape as the image, such as a segmentation mask, a depth map or a blurry version of the image (in the case of a restoration/superresolution model). It does work for other types of conditioning too. For example, in the notebook, the class label is mapped to an embedding and then expanded to be the same width and height as the input image so that it can be fed in as additional channels.
2. Creating an embedding and then projecting it down to a size that matches the number of channels at the output of one or more internal layers of the UNet, and then adding it to those outputs. This is how the timestep conditioning is handled, for example. The output of each Resnet block has a projected timestep embedding added to it. This is useful when you have a vector such as a CLIP image embedding as your conditioning information. A notable example is the 'Image Variations' version of Stable Diffusion which does exactly this.
3. Adding cross-attention layers that can 'attend' to a sequence passed in as conditioning. This is most useful when the conditioning is in the form of some text - the text is mapped to a sequence of embeddings using a transformer model, and then cross-attention layers in the UNet are used to incorporate this information into the denoising path. We'll see this in action in Unit 3 as we examine how Stable Diffusion handles text conditioning.

### 2.2 Fine-Tuning and Guidance



### 2.3 Class-Conditioned Diffusion Model


### Some Additional Resources
Denoising Diffusion Implicit Models - Introduced the DDIM sampling method (used by DDIMScheduler)

GLIDE: Towards Photorealistic Image Generation and Editing with Text-Guided Diffusion Models - Introduced methods for conditioning diffusion models on text

eDiffi: Text-to-Image Diffusion Models with an Ensemble of Expert Denoisers - Shows how many different kinds of conditioning can be used together to give even more control over the kinds of samples generated


## Unit3 



## Unit4


## Appendix
### pred img directly or noise 
You may think that predicting the noise (from which we can derive what the denoised image looks like) is equivalent to just predicting the denoised image directly. So why favour one over the other - is it just for mathematical convenience?

It turns out there's another subtlety here. We compute the loss across different (randomly chosen) timesteps during training. These different objectives will lead to different 'implicit weighting' of these losses, where predicting the noise puts more weight on lower noise levels. You can pick more complex objectives to change this 'implicit loss weighting'. Or perhaps you choose a noise schedule that will result in more examples at a higher noise level. Perhaps you have the model predict a 'velocity' v which we define as being a combination of both the image and the noise dependent on the noise level (see 'PROGRESSIVE DISTILLATION FOR FAST SAMPLING OF DIFFUSION MODELS'). Perhaps you have the model predict the noise but then scale the loss by some factor dependent on the amount of noise based on a bit of theory (see 'Perception Prioritized Training of Diffusion Models') or based on experiments trying to see what noise levels are most informative to the model (see 'Elucidating the Design Space of Diffusion-Based Generative Models'). TL;DR: choosing the objective has an effect on model performance, and research in ongoing into what the 'best' option is.

At the moment, predicting the noise (epsilon or eps you'll see in some places) is the favoured approach but over time we will likely see other objectives supported in the library and used in different situations.

### key points
Exactly how we take these steps depends on the sampling method used. We won't go into the theory too deeply, but some key design questions are:

How large of a step should you take? In other words, what 'noise schedule' should you follow?
Do you use only the model's current prediction to inform the update step (like DDPM, DDIM and many others)? Do you evaluate the model several times to estimate higher-order gradients for a larger, more accurate step (higher order methods and some discrete ODE solvers)? Or do you keep a history of past predictions to try and better inform the current update step (linear multi-step and ancestral samplers).
Do you add in additional noise (sometimes called churn) to add more stochasticity (randomness) to the sampling process, or do you keep it completely deterministic? Many samplers control this with a parameter (such as 'eta' for DDIM samplers) so that the user can choose.

The brave and curious might find it interesting to browse through the code of the different implementations available in the diffusers library here or check out the docs which often link to the relevant papers.


## refs

https://github.com/huggingface/diffusion-models-class/blob/main/

https://github.com/huggingface/diffusion-models-class/blob/main/
