---
layout: post
title:  "使用docker安装常用软件：mysql"
date:   2022-08-26
excerpt: 使用docker安装常用软件：mysql
tag:
- docker
comments: false
---

## 使用docker安装常用软件：mysql

### 以mysql 5.7为例

使用`docker pull mysql:5.7`拉取mysql 5.7镜像

### 使用镜像创建容器

#### 简单版

使用`docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7`运行镜像创建容器

> 因为linux系统自己装了mysql，避免端口冲突，先运行ps -ef|grep mysql查询

使用`docker ps`查询容器编号

使用`docker exec -it 容器编号 bash`进入mysql容器

使用`mysql -uroot -p`,输入密码，登录mysql

##### 验证

`show databases`

```mys
mysql> show databases
    -> ;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
```

##### 中文乱码问题

```mysql
INSERT INTo t1 VALUES(3, "张三");
---
INSERT INTo t1 VALUES(3, "张三")
> 1366 - Incorrect string value: '\xE5\xBC\xA0\xE4\xB8\x89' for column 'name' at row 1
> 时间: 0.038s
```

<font color='green'>因为docker默认编码字符集隐患</font>

```mysql
mysql> SHOW VARIABLES LIKE 'character%';
+--------------------------+----------------------------+
| Variable_name            | Value                      |
+--------------------------+----------------------------+
| character_set_client     | latin1                     |
| character_set_connection | latin1                     |
| character_set_database   | latin1                     |
| character_set_filesystem | binary                     |
| character_set_results    | latin1                     |
| character_set_server     | latin1                     |
| character_set_system     | utf8                       |
| character_sets_dir       | /usr/share/mysql/charsets/ |
+--------------------------+----------------------------+
8 rows in set (0.00 sec)
mysql>
```

#### 解决中文乱码问题

在宿主机的`/ggls/mysql/conf`目录下`vim my.cnf`文件，通过容器卷同步给容器实例

```shell
[client]
default_character_set=utf8
[mysqld]
collation_server = utf8_general_ci
character_set_server = utf8
```

<font color="green">改完后重启mysql实例</font>

##### 服务器输入`SHOW VARIABLES LIKE 'character%';`验证

<font color="red">docker安装好并run出容器后，先修改字符集编码在创建mysql库</font>

##### 删库备份问题

---

### 工作使用版

#### xxxxxxxxxx [root@iZ8vbfaek3x3ogtpxnpnwfZ ~]# docker psCONTAINER ID   IMAGE     COMMAND   CREATED          STATUS          PORTS     NAMES562278524cda   ubuntu    "bash"    20 minutes ago   Up 20 minutes             loving_dewdneycdee90a8c77d   ubuntu    "bash"    45 minutes ago   Up 15 minutes             ubuntu[root@iZ8vbfaek3x3ogtpxnpnwfZ ~]# docker ps -a -q | xargs docker rm -f562278524cdacdee90a8c77d[root@iZ8vbfaek3x3ogtpxnpnwfZ ~]# docker psCONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES[root@iZ8vbfaek3x3ogtpxnpnwfZ ~]#​shell

```shell
docker run -d -p 3306:3306 --privileged=true
-v /ggls/mysql/log:/var/log/mysql
-v /ggls/mysql/data:/var/lib/mysql
-v /ggls/mysql/conf:/etc/mysql/conf.d
-e MYSQL_ROOT_PASSWORD=123456
--name mysql 
mysql:5.7
```





#### 解决删库备份问题

<font color="red">只要本机上面的容器卷存在，容器卷位置没有改变的情况下，就算容器被删除，重新打开后，创建的数据库，表都还存在</font>

