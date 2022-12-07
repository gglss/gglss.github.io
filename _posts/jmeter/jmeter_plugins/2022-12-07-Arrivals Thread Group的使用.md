---
layout: post
title: "Arrivals Thread Group的使用"
date:  2022-11-30
excerpt: Arrivals Thread Group怎么使用
tag:
- 性能测试
- jmeter
comments: false 
---

# 前提

* 安装插件，下载`Custom Thread Groupsan`插件

* 添加`Arrivals Thread Group`

# 配置

+ Target Rate (arrivals/sec)  :  相当于`QPS`, 输入10就是10QPS
+ Ramp Up Time (sec)  :  在多少秒内达到最大的QPS，4代表在4秒内获得最大的QPS
+ Ramp-Up Steps Count  :  代表并发数，4代表实现4次的并发
+ Hold Target Rate Time (sec)  :  对系统压多长时间就输入多长时间 ,10代表压上10s
+ Concurrency Limit  :  最大启动多少线程，100代表最多启动100线程

<figure>
	<a href="../assets/img/jmeter/Arrivals Thread Group的使用/Arrivals首页.jpg"><img src="../assets/img/jmeter/Arrivals Thread Group的使用/Arrivals首页.jpg"></a>
</figure>