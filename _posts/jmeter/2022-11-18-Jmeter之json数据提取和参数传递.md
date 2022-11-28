---
layout: post
title:  "Jmeter之json数据提取和参数传递"
date:   2022-11-18
excerpt: 提取响应结果里面的数据形成参数供后面的请求访问
tag:
- 性能测试
- jmeter
comments: false 
---
## 安装组件JSON Extractor
+ 右键`Http Request`
+ 点击`Add -> Post Processors -> JSON Extractor`


组件安装成功
#### 组件配置
+ `Names of created variables`  :  参数变量名称，提取出来的json使用这个变量
+ `Json Path expressions`  :  JSON提取的正则 比如：`$.access_token`这个是提取response里面的token
+ `Match NO.(0 for Random)`:这个是写提取出json的第几条, 比如使用正则能匹配多条，使用这个输入数字就可以匹配对应的

##### 引用json变量
+ Jmeter中引用变量的方法`${变量名}`

#### 调试脚本 Debug Sampler

> 帮助检查变量值，调试脚本

+ 右键`Thread Group`
+ 点击`Add -> Sampler -> Debug Sampler`

注意：把Debug放到所有请求的最底下，运行的后可以查看变量参数，方便调试