---
layout: post
title:  "使用docker安装常用软件：tomcat"
date:   2022-08-26
excerpt: 使用docker安装常用软件：tomcat
tag:
- docker
comments: false
---

## 使用docker安装常用软件：tomcat

#### 安装流程

首先把tomcat在镜像源中`pull`下来，使用`docker images` 查看镜像

使用`docker run -d -p 8080:8080 tomcat:9.0 `新建容器运行tomcat

> 运行后使用本地PC使用阿里云的ip和端口访问docker上面的`tomcat`

<figure>
	<a href="../assets/img/2022-08-25-使用docker安装常用软件：tomcat.assets\\image-20220429095205744.jpg"><img src="../assets/img/2022-08-25-使用docker安装常用软件：tomcat.assets\\image-20220429095205744.jpg"></a>
</figure>



#### 这是什么原因呢

使用`docker ps`查询到容器编号,`docker exec -it 容器编号 bash` 打开容器

```shell
[root@iZ8vbfaek3x3ogtpxnpnwfZ ~]# docker ps
CONTAINER ID   IMAGE          COMMAND             CREATED         STATUS         PORTS                                       NAMES
c52ab6b8b8df   b8e65a4d736d   "catalina.sh run"   7 minutes ago   Up 7 minutes   0.0.0.0:8080->8080/tcp, :::8080->8080/tcp   inspiring_bohr
[root@iZ8vbfaek3x3ogtpxnpnwfZ ~]# docker exec -it c52ab6b8b8df bash
root@c52ab6b8b8df:/usr/local/tomcat#
```

使用`ls-l`查看文件列表

```shell
root@c52ab6b8b8df:/usr/local/tomcat# ls -l
total 156
-rw-r--r-- 1 root root 18970 Dec  2 14:30 BUILDING.txt
-rw-r--r-- 1 root root  6210 Dec  2 14:30 CONTRIBUTING.md
-rw-r--r-- 1 root root 57092 Dec  2 14:30 LICENSE
-rw-r--r-- 1 root root  2333 Dec  2 14:30 NOTICE
-rw-r--r-- 1 root root  3378 Dec  2 14:30 README.md
-rw-r--r-- 1 root root  6898 Dec  2 14:30 RELEASE-NOTES
-rw-r--r-- 1 root root 16507 Dec  2 14:30 RUNNING.txt
drwxr-xr-x 2 root root  4096 Dec 22 17:16 bin
drwxr-xr-x 1 root root  4096 Apr 29 01:48 conf
drwxr-xr-x 2 root root  4096 Dec 22 17:16 lib
drwxrwxrwx 1 root root  4096 Apr 29 01:48 logs
drwxr-xr-x 2 root root  4096 Dec 22 17:16 native-jni-lib
drwxrwxrwx 2 root root  4096 Dec 22 17:16 temp
drwxr-xr-x 2 root root  4096 Dec 22 17:16 webapps
drwxr-xr-x 7 root root  4096 Dec  2 14:30 webapps.dist
drwxrwxrwx 2 root root  4096 Dec  2 14:30 work
root@c52ab6b8b8df:/usr/local/tomcat#
```

从列表可以看到有两个文件夹`webapps`和`webapps.dist`，数据全部在`webapps.dist`里面，需要将`webapps`删除，把`webapps.dist`重命名成`webapps`即可访问

使用`rm -rf webapps`删除`webapps`文件夹

使用`mv webapps.dist webapps `重命名

再次使用本地访问


<figure>
	<a href="../assets/img/2022-08-25-使用docker安装常用软件：tomcat.assets/image-20220429102011983.png"><img src="../assets/img/2022-08-25-使用docker安装常用软件：tomcat.assets/image-20220429102011983.png"></a>
</figure>


#### 使用免修改版的tomcat

> docker pull billygoo/tomcat8-jdk8
>
> docker run -d -p 8080:8080 --name tomcat8 billygoo/tomcat8-jdk8

