---
layout: post
title: "需要cookie访问的Get接口开发"
date:  2022-10-21
excerpt:  需要携带cookies信息才能访问的get请求
tag:
- Java
- SpringBoot
comments: false
---
#### 编写需要cookie才能访问的接口

这个接口还是在`MyGetMethod`类里面编写方法

```java
/**
 * 要求客户端携带cookie访问
 * 这是一个需要携带cookies信息才能访问的get请求
 */
@RequestMapping(value = "/get/with/cookies", method = RequestMethod.GET)
@ApiOperation(value = "要求客户端携带cookie访问", httpMethod = "GET")
public String getWithCookies(HttpServletRequest request){
    Cookie[] cookies = request.getCookies();
    if(Objects.isNull(cookies)){
        return "你必须携带cookies信息来";
    }
    for(Cookie cookie : cookies){
        if(cookie.getName().equals("login") && cookie.getValue().equals("True")){
            return "恭喜你，访问成功！，这是一个需要携带cookies信息才能访问的get请求";
        }
    }
    return "你必须携带cookies信息来";
}
```