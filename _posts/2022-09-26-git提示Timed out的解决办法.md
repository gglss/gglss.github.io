---
layout: post
title:  "2022-09-26-git提示Timed out的解决办法"
date:   2022-09-26
excerpt: 使用git，会发生报错：Failed to connect to github.com port 443 after 21098 ms: Timed out
tag:
- Git
comments: false
---

#### 解决办法

设置代理

```git
git config --global https.proxy
```

取消代理

```git
git config --global --unset https.proxy
```

然后可以输入git命令使用

