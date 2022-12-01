---
layout: post
title: "Constant Timer定时器"
date:  2022-11-29
excerpt: Simple Controller什么作用？怎么使用？什么情况下用？
tag:
- 性能测试
- jmeter
comments: false 
---

## 作用

就是loadrunner上面的思考时间，就是模拟真实用户操作过程的等待时间

## 生效范围

定时器的父节点和子节点，如果想让一个请求强制停止一段时间，就把定时器放在这个请求的下面

**单位是以ms为单位，1s=1000ms**


