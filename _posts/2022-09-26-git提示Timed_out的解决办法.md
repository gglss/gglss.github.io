---
layout: post
title:  "git提示Timed out的解决办法"
date:   2022-09-26
excerpt: 仅做测试
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

然后输入git 命令使用

