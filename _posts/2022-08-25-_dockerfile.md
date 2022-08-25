---
title: _dockerfile
tags: Docker
---

## _dockerfile

### 以dockerfile的方法来进行对centos的具有vim,ifconfig和jdk8的镜像

#### 创建myfile文件夹

#### 创建Dockerfile文件

> 注意：`jdk8`需要和`Dockerfile`放到同一个文件夹

```shell
FROM centos:7												
MAINTAINER zzyy<zzyybs@126.com>								
														
ENV MYPATH /usr/local										
WORKDIR $MYPATH

#安装vim编辑器
RUN yum -y install vim
#安装ifconfig命令查看网络IP
RUN yum -y install net-tools
#安装java8及lib库
RUN yum -y install glibc.i686
RUN mkdir /usr/local/java
#ADD 是相对路径jar,把jdk-8u171-linux-x64.tar.gz添加到容器中,安装包必须要和Dockerfile文件在同一位置
ADD jdk-8u171-linux-x64.tar.gz /usr/local/java/
#配置java环境变量
ENV JAVA_HOME /usr/local/java/jdk1.8.0_171
ENV JRE_HOME $JAVA_HOME/jre
ENV CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib:$CLASSPATH
ENV PATH $JAVA_HOME/bin:$PATH

EXPOSE 80

CMD echo $MYPATH
CMD echo "success--------------ok"
CMD /bin/bash
```

#### 创建好Dockerfile后，运行docker build -t 新镜像名称：Tag .

<font color="red">注意：Tag后面有个空格，有个点</font>

### 虚悬镜像

> 仓库名和标签名全部为<none>的镜像

碰到它还是进行删除的好

使用`docker image ls -f dangling=true`查找虚悬镜像

使用`docker image prune`删除镜像

