---
layout: post
title: "开发获得cookie的Post登录接口"
date:  2022-10-22
excerpt:  登录后可以获得cookie的post接口
tag:
- Java
- SpringBoot
comments: false
---

### 开发获得cookie的Post登录接口

`@RequestMapping(value = "/v1")`的作用是把这个value和方法上的登录地址进行拼接，比如：/v1/login

`@RestController`标识该接口可以被托管

方法参数`@RequestParam(value = "userName", required = true) String userName`,代码中的`required = true`起到必填的作用
 
#### 举个栗子
```java
@RestController
@Api(value = "/", tags = {SwaggerConfig.TagPost})
@RequestMapping(value = "/v1")
public class MyPostMethod {

    //这个变量用来装cookie信息的
    private static Cookie cookie;

    //用户登录成功获取到cookies，然后访问其他接口获取到列表
    @RequestMapping(value = "/login",method = RequestMethod.POST)
    @ApiOperation(value = "登录接口，成功后获取到cookies信息",httpMethod = "POST")
    public String login(HttpServletResponse response,
                        @RequestParam(value = "userName", required = true) String userName,
                        @RequestParam(value = "password", required = true) String password){
        if (userName.equals("zhangsan") && password.equals("123456")){
            cookie = new Cookie("login","true");
            response.addCookie(cookie);
            return "恭喜你登录成功！";
        }
        return "用户名或密码错误！";

    }
```