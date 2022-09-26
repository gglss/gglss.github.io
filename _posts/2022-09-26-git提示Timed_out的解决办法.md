---
layout: post
title:  "git提示Timed out的解决办法"
date:   2022-09-26
excerpt: git报Timed out的解决办法
tag:
- Git
comments: false
---

#### 报错代码

运行git代码会提示Timed out错误

```git
使用git，会发生报错：Failed to connect to github.com port 443 after 21098 ms: Timed out
```

#### 解决办法

设置代理

```git
git config --global https.proxy
```

取消代理

```git
git config --global --unset https.proxy
```

然后输入git 命令使用

