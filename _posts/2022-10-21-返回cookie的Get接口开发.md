---
layout: post
title: "返回cookie的Get接口开发"
date:  2022-10-21
excerpt:  返回cookie的get接口开发
tag:
- JAVA
- SpringBoot
comments: false
---
#### 位置布局

```java
- java
  - com.course.server
    - intertype
      MyGetMethod
    Application
- resources
  - application.properties
```

#### Application 类

创建`Application.java`类，用来运行接口,类名只能是`Application`,不能自定义

```java
@SpringBootApplication
@Controller("com.course.server.intertype")
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

+ `@SpringBootApplication` 作用是给当前类标明是运行的主类，相当于被SpringBoot托管了
+ `@Controller("com.course.server.intertype")` 钩子标识符，扫描包下面的类，被Springboot托管

#### 创建Get接口

创建`MyGetMethod`类

类名上有修饰符`@RestController`和`@Api(value = "/")`

+ `@RestController`  标识该类会被扫描到，然后被SpringBoot托管
+ `@Api(value = "/")`  可加可不加
+ `@RequestMapping(value = "访问路径", method = 访问方法)`  定义接口的访问路径及访问方法
+ `@ApiOperation(value = "接口信息", httpMethod = "接口的请求方法")`  展示接口的基本信息和它的请求方法，可加可不加


下面是代码信息，之后的所有<kbd>GET</kbd>接口都在该类里面写接口方法

```java
@RestController
@Api(value = "/", tags = {SwaggerConfig.TagGet} )
public class MyGetMethod {

    @RequestMapping(value = "/getCookies", method = RequestMethod.GET)
    @ApiOperation(value = "通过这个方法可以获得cookies", httpMethod = "GET")
    public String getCookies(HttpServletResponse response){

        // HttpServerletRequest  装请求信息类
        // HttpServerletResponse  装响应信息类

        Cookie cookie = new Cookie("login", "True");

        response.addCookie(cookie);

        return "恭喜获得cookies信息成功";
    }
}
```

上面就是返回cookie的get接口开发,接下来就是 需要携带cookies信息才能访问的get请求
