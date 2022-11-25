---
layout: post
title:  "_mysql主从复制docker版"
date:   2022-08-26
excerpt: _mysql主从复制docker版
tag:
- docker
comments: false
---

## _mysql主从复制docker版

### 安装mysql主从复制（一主一从）



新建主服务器容器实例3307

```shell
docker run -p 3307:3306 --name mysql-master -v /mydata/mysql-master/log/:/var/log/mysql -v /mydata/mysql-master/data:/var/lib/mysql -v /mydata/mysql-master/conf:/etc/mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7
```

进入`/mydata/mysql-master/conf`目录下新建`my.cnf`把下面内容粘贴到`my.cnf`

```shell
[mysqld]
## 设置server_id，同一局域网中需要唯一
server_id=101 
## 指定不需要同步的数据库名称
binlog-ignore-db=mysql  
## 开启二进制日志功能
log-bin=mall-mysql-bin  
## 设置二进制日志使用内存大小（事务）
binlog_cache_size=1M  
## 设置使用的二进制日志格式（mixed,statement,row）
binlog_format=mixed  
## 二进制日志过期清理时间。默认值为0，表示不自动清理。
expire_logs_days=7  
## 跳过主从复制中遇到的所有错误或指定类型的错误，避免slave端复制中断。
## 如：1062错误是指一些主键重复，1032错误是因为主从数据库数据不一致
slave_skip_errors=1062
```

修改完配置后重启master容器

master容器实例内创建数据同步用户

```shell
# 建立一个用户
CREATE USER 'slave'@'%' IDENTIFIED BY '123456';
# 对新建的用户进行授权
GRANT REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'slave'@'%';
```

<figure>
	<a href="../assets/img/2022-08-25-_mysql主从复制docker版.assets/图像2.png"><img src="../assets/img/2022-08-25-_mysql主从复制docker版.assets/图像2.png"></a>
</figure>


新建从服务器实例3308

```shell
docker run -p 3308:3306 --name mysql-slave -v /mydata/mysql-slave/log/:/var/log/mysql -v /mydata/mysql-slave/data:/var/lib/mysql -v /mydata/mysql-slave/conf:/etc/mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7
```

进入/mydata/mysql-slave/conf目录下新建my.cnf

```shell
## 设置使用的二进制日志格式（mixed,statement,row）
binlog_format=mixed  
## 二进制日志过期清理时间。默认值为0，表示不自动清理。
expire_logs_days=7  
## 跳过主从复制中遇到的所有错误或指定类型的错误，避免slave端复制中断。
## 如：1062错误是指一些主键重复，1032错误是因为主从数据库数据不一致
slave_skip_errors=1062  
## relay_log配置中继日志
relay_log=mall-mysql-relay-bin  
## log_slave_updates表示slave将复制事件写进自己的二进制日志
log_slave_updates=1  
## slave设置为只读（具有super权限的用户除外）
read_only=1
```

重启从机实例`docker restart mysql-slave`

在主数据库中查看主从同步状态`show master status;`

进入mysql-slave从机容器

在从数据库中配置主从复制`change master to master_host='宿主机ip', master_user='slave', master_password='123456', master_port=3307, master_log_file='mall-mysql-bin.000001', master_log_pos=617, master_connect_retry=30;`

```shell
# 说明：
master_host：主数据库的IP地址；
master_port：主数据库的运行端口；
master_user：在主数据库创建的用于同步数据的用户账号；
master_password：在主数据库创建的用于同步数据的用户密码；
master_log_file：指定从数据库要复制数据的日志文件，通过查看主数据的状态，获取File参数；
master_log_pos：指定从数据库从哪个位置开始复制数据，通过查看主数据的状态，获取Position参数；
master_connect_retry：连接失败重试的时间间隔，单位为秒。
```

在从数据库中查看主从同步状态`show slave status \G;`

在从数据库中开启主从同步`start slave`

查看从数据库状态发现已经同步

<figure>
	<a href="../assets/img/2022-08-25-_mysql主从复制docker版.assets\图像.png"><img src="../assets/img/2022-08-25-_mysql主从复制docker版.assets\图像.png"></a>
</figure>


主从复制测试

主机创建数据库，创建表，插入数据，搜索表的数据

从机直接搜索标的数据