---
layout: post
title: "循环控制器Loop Controller"
date:  2022-11-29
excerpt: Loop Controller什么作用？怎么使用？什么情况下用？
tag:
- 性能测试
- jmeter
comments: false 
​---

### 作用

指定子节点运行的次数，使用变量或数值进行控制

+ Infinite：表示一直循环
+ 如果同时设置线程组循环次数和循环控制器的循环次数，那控制器子节点运行的次数为两个数值相乘的结果

### 添加

