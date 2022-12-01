---
layout: post
title: "Constant Throughput Timer定时器"
date:  2022-11-30
excerpt: Constant Throughput Timer吞吐量定时器什么作用？怎么使用？什么情况下用？
tag:
- 性能测试
- jmeter
comments: false 
---

## 作用
限制整个运行过程中的生成的吞吐量不要超过某一个值，防止压死系统

## 参数
+ Target throughput(in samples per minute)：目标吞吐量，指的是每分钟发送的请求数，对应测试要求的`20 QPS`，这里应该输入1200
+ Calculate Throughput based on:有5个选项
  + `This Thread only`:控制每个线程的吞吐量，这个模式的作用是:`总的吞吐量=Target throughput * 线程的数量`
  + `All active threads`:设置的***Target throughput***将分配在每个活跃线程上，每个活跃线程在上一次运行结束后等待合理时间后再次运行。活跃线程指的是同一时刻同时运行的线程
  + `All active threads in current thread group`:设置的`***Target throughput***将分配在当前线程祖的每一个活跃线程上，当测试计划只有一个线程组，这个模式作用和All active threads一样
  + `All active threads（shared）`：与All active threads选项基本一致，唯一区别是，每一个活跃线程都会在所有活跃线程上一次运行结束后等待合理时间再次运行
  + `All active threads in current thread group（shared）`:与All active threads in current thread group选项基本一致，唯一区别是，每个活跃线程都会在所有活跃线程的上一次运行结束等待合理的时间后再次运行

