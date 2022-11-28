---
layout: post
title:  "Jmeter之全局参数设置和csv数据导入"
date:   2022-11-18
excerpt: 设置全局参数和csv数据导入
tag:
- 性能测试
- jmeter
comments: false 
---
#### 全局参数设置
##### 添加组件
+ 右键`Thread Group`
+ 点击`Add -> Config Element -> User Defined Variables`

##### 添加对应的变量
+ `hostname`：localhost
+ `port`：9090
+ `protocol`：http

然后再请求参数中使用对应的参数变量名
+ `${hostname}`
+ `${port}`
+ `${protocol}`

#### csv数据导入
##### 创建csv文件
+ 使用Excel创建csv文件
+ csv数据之间使用英文逗号来分割
+ 保存成`.csv`文件

##### 添加csv导入组件
+ 右键`Thread Group`
+ 点击`Add -> Config Element -> CSV Data Set Config`

##### 配置
+ `Filename`：文件位置
+ `File encoding`：编码格式
+ `Variable Names(comma-delimited)`：数据参数 如：`no,username,password`
+ `lgnore first lline (only user if Variable Names is not empty)`：是否忽略第一行（表头）
+ `Delimiter(use "\t" for tab)`：分隔符
+ `Allow quoted data?`：是否允许双引号括住数据
+ `Recycle on EOF?`：到了文件结尾是否循环
+ `Stop thread on EOF?`：到了文件结尾是否停止
+ `Sharinng mode`：共享模式

<font color='red' font-size='30px'>注意：把请求的参数修改为：`${变量}`</font>