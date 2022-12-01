---
layout: post
title: "Gaussian Random Timer定时器"
date:  2022-11-30
excerpt: Gaussian Random Timer高斯定时器什么作用？怎么使用？什么情况下用？
tag:
- 性能测试
- jmeter
comments: false 
---

### 作用
生成随机等待时间

### 参数
+ `Deviation(in milliseconds) `：高斯定时器参数,随机的
+ `Constant Delay Offset（in milliseconds）`：固定等待时长

生成的时长是`Deviation + Constant Delay Offset`
