---
layout: post
title: "Fix entering Emergency Mode during startup"
date: 2023-09-03 12:00:00
description: >
  File-System Read-Only. Reboot and enter recovery mode to make it Write/Read.
categories: ["engineering"]
math: true
---
关于解决Ubuntu22启动时进入Emergency Mode的问题

## 修复启动时进入Emergency Mode

最近机房服务器在启动时进入了紧急模式,显示有file system error，具体为 file system 的所有文件变为了read-only。这种情况可能是因为文件系统损坏导致的。要修复这个问题,主要有两种方法:

### 方法1:在GRUB中添加参数强制文件系统检查

可以在GRUB的启动参数中添加`fsck.repair=yes`。这会强制系统在启动时进行文件系统检查,并自动修复发现的错误。

具体操作方法是:

1. 重启电脑,进入GRUB菜单
2. 选择要启动的内核,按“e”键编辑
3. 在内核那一行的末尾添加`fsck.repair=yes` 
4. 按F10保存并退出

这种方法可以自动解决文件系统错误,不过有时也无法完全修复,需要手动操作。

### 方法2:在紧急模式下运行fsck命令检查文件系统

如果方法1无法解决,可以进入紧急模式,手动运行文件系统检查工具fsck,定位并修复错误。

具体操作方法是:

1. 重启进入GRUB菜单
2. 选择“高级选项”>“紧急模式”
3. 运行命令`sudo fsck -f /dev/sdXX` (用实际的磁盘代号替换sdXX)
4. 根据提示修复错误,修复完成后重启系统

这种方法可以更深入检测文件系统,手动定位错误。但需要对系统较熟悉,才能解析fsck的输出。

通过上述两种方法,我成功修复了启动时进入紧急模式的问题。文件系统维护非常重要,要定期备份数据,避免系统崩溃或损坏导致数据丢失。如果遇到类似问题,可以参考这两种解决方法。
