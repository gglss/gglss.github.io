---
layout: post
title:  "使用moko编写Get和Post测试接口（二）"
date:   2022-11-28
excerpt: 使用moko进行Get和Post测试接口的编写
project: true
tag:
- java
comments: false
---

**上一节已经写了规则，这次直接来编写Get和Post请求**

#### 这是一个会返回cookie的get请求

```json
{
    "description": "这是一个会返回cookie的get请求",
    "request": {
      "uri": "/getCookies",
      "method": "get"
    },
    "response": {
      "cookies": {
        "login": "true"
      },
      "text": "恭喜你获得cookies信息成功",
      "status": 200,
      "msg": "成功"
    }
  }
```

#### 这是一个携带cookies信息的get请求
```json
{
    "description": "这是一个带cookies信息的get请求",
    "request": {
      "uri": "/get/with/cookies",
      "method": "get",
      "cookies": {
        "login": "true"
      }
    },
    "response": {
      "text": "这是一个需要携带cookies信息才能访问的get请求"
    }
  }
```

#### 这是一个携带cookies信息的post请求
```json
{
  "description": "这是一个带cookies信息的post请求",
  "request": {
    "uri": "/post/with/cookies",
    "method": "post",
    "cookies": {
      "login": "true"
    },
    "json": {
      "name": "huhansan",
      "age": "18"
      }
    },
    "response": {
      "status": 200,
      "json": {
        "huhansan": "success",
        "status": "1"
      }
    }
  }
```

