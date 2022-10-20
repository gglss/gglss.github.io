---
layout: post
title:  "使用docker的ubuntu容器安装code-server"
date:   2022-10-20
excerpt: 使用docker的ubuntu容器安装code-server,然后使用"https"访问
tag:
- ubuntu
comments: false
---
<<<<<<< HEAD
### 使用docker拉取ubuntu镜像

```ssh
# 拉取镜像
docker pull ubuntu
# 进入镜像
docker run --name [自定义名称] -u root --privileged=true -p 3000:8881 -v /opt/testubuntu/:/opt/main_file -it [imageid]
```

### 安装code-server

在[github](https://github.com/coder/code-server)上下载安装包,解压后剪切到`/home`目录

### 运行code-server
```ssh
# 找到bin目录下的code-server*
cd /home/code-server/bin
# 输入运行命令
export PASSWORD="123456" && ./code-server --host 0.0.0.0 --port 8881
```
=======
#### 使用docker拉取ubuntu镜像

```ssh

# 拉取镜像

docker pull ubuntu

# 进入镜像

docker run --name [自定义名称] -u root --privileged=true -p 3000:8881 -v /opt/testubuntu/:/opt/main_file -it [imageid]
```


#### 安装code-server

在(github)[https://github.com/coder/code-server]上下载安装包,解压后剪切到`/home`目录

#### 运行code-server

```ssh

# 找到bin目录下的code-server*

cd /home/code-server/bin

# 输入运行命令

export PASSWORD="123456" && ./code-server --host 0.0.0.0 --port 8881

```

>>>>>>> 新增文档
在浏览器输入http://ip:3000打开界面后显示正确

> 使用上面方法部署的code-server,因为是http的，导致一些功能不好用，比如写md文档无法预览
>
> 现在需要配置使用https运行

<<<<<<< HEAD
### 配置HTTPS
=======
#### 配置HTTPS
>>>>>>> 新增文档

使用openssl为IP签发证书

一般的linux系统已经内置openssl,可以输入openssl进行查看，没有的话就需要安装

<<<<<<< HEAD
#### 生成证书请求文件
=======
##### 生成证书请求文件
>>>>>>> 新增文档

安装好openssl后，在当前路径下新建`openssl.cnf`，并编辑如下内容

```ssh
<<<<<<< HEAD
=======

>>>>>>> 新增文档
[req]
distinguished_name = req_distinguished_name
req_extensions = v3_req

[req_distinguished_name]
countryName = Country Name (2 letter code)
countryName_default = CH
stateOrProvinceName = State or Province Name (full name)
stateOrProvinceName_default = ZJ
localityName = Locality Name (eg, city)
localityName_default = HangZhou
organizationalUnitName  = Organizational Unit Name (eg, section)
organizationalUnitName_default  = THS
commonName = Internet Widgits Ltd
commonName_max  = 64

[ v3_req ]
# Extensions to add to a certificate request
basicConstraints = CA:FALSE
keyUsage = nonRepudiation, digitalSignature, keyEncipherment
subjectAltName = @alt_names

[alt_names]

# 改成自己的域名
DNS.1 = your_domain_name.com

# 改成自己的ip
IP.1 = 8.142.144.75
IP.2 = 0.0.0.0
<<<<<<< HEAD
```

#### 生成私钥
=======

```

##### 生成私钥
>>>>>>> 新增文档

> openssl genrsa -out san_domain_com.key 2048

san_domain_com 为最终生成的文件名，一般以服务器命名，可改。

<<<<<<< HEAD
#### 创建CSR文件
=======
##### 创建CSR文件
>>>>>>> 新增文档

> openssl req -new -out san_domain_com.csr -key san_domain_com.key -config openssl.cnf

执行后，系统提示输入组织等信息，按提示输入如即可。

需要测试CSR文件是否生成成功

> openssl req -text -noout -in san_domain_com.csr

有下面的信息，说明生成成功

```ssh
<<<<<<< HEAD
=======

>>>>>>> 新增文档
Certificate Request:
    Data:
        Version: 0 (0x0)
        Subject: C=US, ST=MN, L=Minneapolis, OU=Domain Control Validated, CN=zz
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
                Public-Key: (2048 bit)
                //...
<<<<<<< HEAD
```

#### 自签名并创建证书
=======

```

##### 自签名并创建证书
>>>>>>> 新增文档

> openssl x509 -req -days 3650 -in san_domain_com.csr -signkey san_domain_com.key -out san_domain_com.crt -extensions v3_req -extfile openssl.cnf

在当前目录会生成三个文件

```ssh
<<<<<<< HEAD
=======

>>>>>>> 新增文档
san_domain_com.crt

san_domain_com.csr

san_domain_com.key
<<<<<<< HEAD
=======

>>>>>>> 新增文档
```

##### 在用户电脑安装证书

将`.crt`证书发给用户，用户双击进行安装，然后重启浏览器

##### code server启动

运行如下命令，设置端口号为8881，指定对应生成的crt和key密钥文件，即可正常访问https域名
```ssh
<<<<<<< HEAD
# 给ssh创建密码
export PASSWORD="123456"
# 启动ssh
nohup ./code-server --port 8881 --host 0.0.0.0 --cert ../san_domain_com.crt --cert-key ../san_domain_com.key > vscode.log 2>&1 &
```
然后通过浏览器访问https://ip:3000
=======

# 给ssh创建密码

export PASSWORD="123456"

# 启动ssh

nohup ./code-server --port 8881 --host 0.0.0.0 --cert ../san_domain_com.crt --cert-key ../san_domain_com.key > vscode.log 2>&1 &

```

然后通过浏览器访问https://ip:3000

>>>>>>> 新增文档
