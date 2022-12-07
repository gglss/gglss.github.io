---
layout: post
title: "Ultimate Thread Group的使用"
date:  2022-11-30
excerpt: Ultimate Thread Group怎么使用
tag:
- 性能测试
- jmeter
comments: false 
---
# 前提

* 安装插件，下载`Custom Thread Groupsan`插件

* 添加`Ultimate Thread Group`

# 配置

+ Start Threads Count  :  线程数
+ Initial Delay,sec  :  线程延迟启动，0指的是立即启动；5代表五秒后启动
+ Startup Time,sec  :  线程及时启动，0代表立即启动，5代表五秒之内启动完成
+ Hold Load For,sec  :  启动后运行的时间，120代表运行120秒
+ Shutdown Time  :  代表运行结束后停止的时间，0代表运行结束后立即停止，5代表运行结束后五秒内停止



<figure>
	<a href="../assets/img/jmeter/Ultimate Thread Group的使用/Ultimate首页.PNG"><img src="../assets/img/jmeter/Ultimate Thread Group的使用/Ultimate首页.PNG"></a>
</figure>
