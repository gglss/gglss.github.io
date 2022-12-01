---
layout: post
title:  "使用moko编写Get和Post测试接口（二）"
date:   2022-11-28
excerpt: 使用moko进行Get和Post测试接口的编写
tag:
- Java
comments: false
---
**上一节已经写了规则，这次直接来编写Get和Post请求**

**模拟一个没有参数的get请求**
```json
{
    "description": "模拟一个没有参数的get请求",
    "request": {
      "uri": "/getdemo",
      "method": "get"
    },
    "response": {
      "text": "这是一个没有参数的get请求"
    }
}
```
**模拟一个带参数的请求**
```json
{
    "description": "模拟一个带参数的请求",
    "request": {
      "uri": "getwithparam",
      "method": "get",
      "queries": {
        "name": "胡汉三",
        "age": "18"
      }
    },
    "response": {
      "text": "我胡汉三又回来了！！！！！"
    }
}
```

**模拟一个Post请求**
```json
{
    "description": "模拟一个Post请求",
    "request": {
      "uri": "/postdemo",
      "method": "post"
    },
    "response": {
      "text": "这是我的第一个mosk的post请求"
    }
  }
```

**这是一个带参数的post请求**
```json
{
  "description": "这是一个带参数的post请求",
  "request": {
    "uri": "/postwithparam",
    "method": "post",
    "forms": {
      "name": "胡汉三",
      "sex": "男人"
    }
  },
  "response": {
    "text": "我胡汉三带着参数来了！！！！"
  }
}
```