---
layout: archive
title: "Slides"
permalink: /slides/
author_profile: true
---

<!-- Academic Talks Section -->
<div class="section academic-section">
  <h1>Talks</h1>

  <div class="talk">
    <h3>LoLDU: Low-Rank Adaptation via Lower-Diag-Upper Decomposition</h3>
    <p><strong>Date:</strong> December 15, 2023</p>
    <p>A presentation about our novel PEFT method.</p>
    <div class="links">
      <a href="{{ site.baseurl }}/files/loldu_slides.pdf">View Slides</a>
      <a href="https://github.com/SKDDJ/LoLDU">GitHub Repo</a>
    </div>
  </div>

  <div class="talk">
    <h3>DiffLoRA: Personalized Low-Rank Adaptation with Diffusion</h3>
    <p><strong>Status:</strong> Coming Soon</p>
    <p>An upcoming presentation on our innovative approach to generating personalized LoRA weights using diffusion models.</p>
  </div>
</div>

<!-- Paper Reading Section -->
<div class="section paper-reading-section">
  <h1>Paper Readings</h1>

  <!-- Example Paper Entry -->
  <!-- <div class="paper">
    <h3>Example Paper Title</h3>
    <p><strong>Authors:</strong> Zhang San, Li Si</p>
    <p>A brief introduction to the main content and contributions of the paper.</p>
    <div class="links">
      <a href="{{ site.baseurl }}/files/example_paper.pdf">View Paper</a>
      <a href="https://arxiv.org/abs/example">View Original</a>
    </div>
  </div> -->

  <!-- Add more paper entries as needed -->
</div>

<!-- Personal Introduction Section -->
<div class="section intro-section">
  <h1>Personal Introduction</h1>
  <div class="introductions">
    <div class="intro">
      <h4>UESTC Style Introduction</h4>
      <a href="{{ site.baseurl }}/files/yimingshi_intro_uestc.pdf">View Slides</a>
    </div>
    <div class="intro">
      <h4>CFM Style Introduction</h4>
      <a href="{{ site.baseurl }}/files/yimingshi_intro_cfm.pdf">View Slides</a>
    </div>
  </div>
</div>

<style>
  /* General Container Styles */
  .section { 
    max-width: 800px; 
    margin: 40px auto; 
    padding: 0 20px; 
    font-family: Arial, sans-serif;
    color: #333;
  }

  /* Header Styles */
  .section h1 { 
    text-align: center; 
    color: #000; 
    margin-bottom: 30px; 
    font-size: 2em;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
  }

  /* Talk and Paper Styles */
  .talk, .paper {
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 1px solid #e0e0e0;
  }

  .talk h3, .paper h3 {
    margin: 0 0 10px 0;
    font-size: 1.2em;
    color: #003087;
  }

  .talk p, .paper p {
    margin: 5px 0;
    line-height: 1.6;
  }

  /* Links Styles */
  .links a {
    margin-right: 15px;
    color: #003087;
    text-decoration: none;
    border: 1px solid #003087;
    padding: 5px 10px;
    border-radius: 3px;
    transition: background-color 0.3s, color 0.3s;
    font-size: 0.95em;
  }

  .links a:hover {
    background-color: #003087;
    color: #fff;
  }

  /* Personal Introduction Styles */
  .introductions {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .intro {
    text-align: center;
    flex: 1 1 250px;
    margin-bottom: 20px;
  }

  .intro h4 {
    margin-bottom: 10px;
    font-size: 1.1em;
    color: #333;
  }

  .intro a {
    color: #003087;
    text-decoration: none;
    border: 1px solid #003087;
    padding: 5px 10px;
    border-radius: 3px;
    transition: background-color 0.3s, color 0.3s;
    font-size: 0.95em;
  }

  .intro a:hover {
    background-color: #003087;
    color: #fff;
  }

  /* Responsive Design */
  @media (max-width: 600px) { 
    .introductions {
      flex-direction: column;
      align-items: center;
    }
    
    .links a {
      display: block;
      margin: 5px 0;
    }
  }
</style>
