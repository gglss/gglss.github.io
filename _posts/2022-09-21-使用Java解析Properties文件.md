---
layout: post
title:  "2022-09-21-使用Java解析Properties文件"
date:   2022-09-21
excerpt: 使用java解析properties文件
tag:
- Java
- Properties
comments: false
---

#### 主要函数

| 文件后缀    | 函数方法    |          |
| ----------- | :---------- | -------- |
| .Properties | load        | 加载文件 |
|             | setProperty | 设置     |
|             | getProperty | 获取     |

#### 编写逻辑

创建加载文件的方法

```java
    /**
     * 加载文件
     * @return Properties 对象
     * @throws IOException I/O输入异常
     */
    private Properties readProperties() throws IOException{
        // 实例化，创建 Properties 对象
        Properties properties = new Properties();
        try {
            // 创建文件输入对象 FileInputStream("testpro.properties")
            InputStream inputStream = new FileInputStream(filepath);
            // 把文件输入对象放入缓存输入对象 new BufferedInputStream 里面
            BufferedInputStream in = new BufferedInputStream(inputStream);
            // 加载文件 in = ParseProperties.class.getResourceAsStream("testpro.properties"),自动获取 resources 文件夹下路径
            properties.load(in);
        }catch (IOException e){
            e.printStackTrace();
        }
        return properties;
    }
```

获取key后面的数据

```java
/**
     * 获取数据
     * @param key 数据名称
     * @return 数据等号右边的值
     * @throws Exception 异常
     */
    public String getPro(String key) throws Exception {
        // 判断文件里面有没有这个 Key
        if (prop.containsKey(key)) {
            // 获得key后面的value值
            return prop.getProperty(key);
        }else {
            System.out.println("你获取的key值不对");
            return "";
        }
    }
```

获取定位类型或者定位表达式

```java
/**
     * 返回定位类型或者定位表达式
     * @param key 数据名称
     * @param num 输入0/1
     * @return num=0时，返回定位类型，num=1时，返回定位表达式
     */
    public String get_pro_element(String key, int num){
        return (num!=0 & num!=1) ? "num：参数输入错误" : prop.getProperty(key).split("->")[num];
    }
```

