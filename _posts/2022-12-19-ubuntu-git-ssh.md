---
layout: post
title: "Ubuntu-Git-SSH 推送"
date: 2022-12-19 12:00:00
description: >
  解决了代理模式下Ubuntu使用Git推送Hexo的心头之患
categories: ["engineering"]
---
## 解决了我的心头大患

[帖子链接](https://stackoverflow.com/questions/59692874/ssh-vt-gitgithub-com-kex-exchange-identification-connection-closed-by-remote "stackoverflow帖子,需要翻墙")

原因分析:

* Ubuntu翻墙使用的Clash并且所有网络访问走的都是指定端口9494
* 导致一直github远程仓库无法认证,疑似没有添加公钥，尝试重新生成ssh公钥
* 还得是[stackoverflow](www.stackoverflow.com)老哥靠谱,指出代理的可能性
* 最后通过先在 `.ssh`中建立 `config`文件,随后配置端口Port443以及认证密钥

  ```bash
  Host github.com
      User git
      Port 443
      HostName ssh.github.com
      IdentityFile ~/.ssh/id_rsa 
  ```
* 最后通过命令 `ssh -T git@github.com` yes后认证成功
* 解决,继续部署静态博客

12.20号,在coding上部署的时候发现ssh连接验证又出现了问题!

> 具体表现为使用下面的命令直接卡住,还不如github当初的直接拒绝呢

使用命令:

`ssh -T git@git.coding.net`

`ssh -T git@ssh.coding.net`

均不奏效,遂更改 `.ssh`文件里面的 `config`文件

内容如下:

```bash
Host coding.net
    User git
    Port 443
    HostName ssh.coding.net
    IdentityFile ~/.ssh/id_rsa  

Host *.coding.net
    User git
    Port 443
    HostName git.coding.net
    HostkeyAlgorithms +ssh-rsa
    PubkeyAcceptedAlgorithms +ssh-rsa
    IdentityFile ~/.ssh/id_rsa
```

两个文件配置都试过,可惜就下面那个加 `*.`的还稍微靠谱一点,起码连接的时候把端口改为443了,但是都还是卡住了,随后发现这个命令可以完成认证:

`ssh -T git@e.coding.net`

![](https://raw.githubusercontent.com/SKDDJ/picgoimgbed/main/202307291904029.png)
