---
layout: post
title: "事务控制器Transcation Controller"
date:  2022-11-29
excerpt: Simple Controller什么作用？怎么使用？什么情况下用？
tag:
- 性能测试
- jmeter
comments: false 
---

作用

一个事务会包含并请求，然后查看一个事务的QPS等性能指标



QPS：每秒处理完请求的次数，具体指1s内发出请求到服务器处理完成并返回结果的次数

TPS：每秒处理完的事务次数，一般TPS是对整个系统来讲的，一个应用系统1s能完成多少事务处理，一个事务在分布式处理中，可能对应多个请求，对于衡量单个接口服务的处理能力，一般使用QPS

