---
layout: post
title:  "使用docker安装常用软件：redis"
date:   2022-08-26
excerpt: 使用docker安装常用软件：redis
tag:
- docker
comments: false
---

## 使用docker安装常用软件：redis

使用`docker pull redis:6.0.8 `拉取redis:6.0.8镜像

**创建容器**

> 容器卷要加入`--privileged=true`

在宿主机下新建目录`mkdir -p /app/redis`

