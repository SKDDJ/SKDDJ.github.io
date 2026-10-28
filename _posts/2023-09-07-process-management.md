---
layout: post
title: "My Questions and Learnings from Exploring  Process Management"
date: 2023-09-07 12:00:00
description: >
  In summary, this post covered my process of learning about  process management through
  analyzing example process data, inspecting detailed process information, understanding
  basic process monitoring tools and models like SSH, and methods for checking concurrent
  account usage.
categories: ["engineering"]
tags: ["systems"]
math: true
---
## 1. Analyzing Process States 

Early on, I collected some process status information containing process state abbreviations like S, D, etc. By researching their meanings, I summarized that S represents a running process and D means blocked waiting for I/O. Comparing the process info, I analyzed what tasks each process was performing, such as file copying or VSCode monitoring.

## 2. Inspecting Detailed Process Resource Usage

To deeply understand a copying process, I further parsed its username, PID, run time, memory usage, executing command and parameter meanings to gain a comprehensive view.  

## 3. Using Process Monitoring Commands  

I learned commands like ps, pstree, top, and lsof that provide process resource usage, memory mappings, open file descriptors and more. For example, lsof shows which files a process has open.

## 4. Understanding the SSH Connection Process Model

Research showed that each SSH connection spawns three processes - a primary sshd receives connections, a child handles sessions, and ssh allocates the Shell environment. This helped me grasp SSH connection workflow.

## 5. Checking Concurrent Logins

Lastly, using w, who, last with a username checks the number of concurrent login sessions for that account, useful for access management.

Through exploring process management concepts in Linux, I aimed to address questions and summarize findings on analyzing processes and monitoring resources in practice. Ongoing learning will strengthen my skills.
