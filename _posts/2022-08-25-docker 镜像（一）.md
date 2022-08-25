### 查询本地主机上的镜像
> docker images
> OPTIONS说明：
> - - a	列出本地所有的镜像（含历史镜像）
> - - q	只显示镜像ID

#### 举个栗子
```shell
[root@iZ8vbfaek3x3ogtpxnpnwfZ /]# docker images
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
tomcat        9.0       b8e65a4d736d   4 months ago   680MB
tomcat        latest    fb5657adc892   4 months ago   680MB
hello-world   latest    feb5d9fea6a5   7 months ago   13.3kB
centos        latest    5d0da3dc9764   7 months ago   231MB
ubuntu        15.10     9b9cb95443b5   5 years ago    137MB
[root@iZ8vbfaek3x3ogtpxnpnwfZ /]#
```
```shell
[root@iZ8vbfaek3x3ogtpxnpnwfZ /]# docker images -a
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
tomcat        9.0       b8e65a4d736d   4 months ago   680MB
tomcat        latest    fb5657adc892   4 months ago   680MB
hello-world   latest    feb5d9fea6a5   7 months ago   13.3kB
centos        latest    5d0da3dc9764   7 months ago   231MB
ubuntu        15.10     9b9cb95443b5   5 years ago    137MB
[root@iZ8vbfaek3x3ogtpxnpnwfZ /]#
```
```shell
[root@iZ8vbfaek3x3ogtpxnpnwfZ /]# docker images -q
b8e65a4d736d
fb5657adc892
feb5d9fea6a5
5d0da3dc9764
9b9cb95443b5
[root@iZ8vbfaek3x3ogtpxnpnwfZ /]#

```

### 查询镜像仓库是否有该镜像
> docker search 镜像名称

#### 举个栗子
STARS	点赞数
OFFICIAL	官方认证
```shell
[root@iZ8vbfaek3x3ogtpxnpnwfZ /]# docker search hello-world
NAME                                       DESCRIPTION                                     STARS     OFFICIAL               AUTOMATED
hello-world                                Hello World! (an example of minimal Dockeriz…   1718      [OK]                 
kitematic/hello-world-nginx                A light-weight nginx container that demonstr…   151                            
tutum/hello-world                          Image to test docker deployments. Has Apache…   88                               [OK]
dockercloud/hello-world                    Hello World!                                    19                               [OK]
crccheck/hello-world                       Hello World web server in under 2.5 MB          15                               [OK]
arm32v7/hello-world                        Hello World! (an example of minimal Dockeriz…   3                              
ansibleplaybookbundle/hello-world-db-apb   An APB which deploys a sample Hello World! a…   2                                [OK]
ppc64le/hello-world                        Hello World! (an example of minimal Dockeriz…   2                              
thomaspoignant/hello-world-rest-json       This project is a REST hello-world API to bu…   1                              
datawire/hello-world                       Hello World! Simple Hello World implementati…   1                                [OK]
ansibleplaybookbundle/hello-world-apb      An APB which deploys a sample Hello World! a…   1                                [OK]
souravpatnaik/hello-world-go               hello-world in Golang                           1                              
rancher/hello-world                                                                        1                              
strimzi/hello-world-consumer                                                               0                              
koudaiii/hello-world                                                                       0                              
strimzi/hello-world-producer                                                               0                              
freddiedevops/hello-world-spring-boot                                                      0                              
strimzi/hello-world-streams                                                                0                              
garystafford/hello-world                   Simple hello-world Spring Boot service for t…   0                                [OK]
okteto/hello-world                                                                         0                              
dandando/hello-world-dotnet                                                                0                              
tsepotesting123/hello-world                                                                0                              
kevindockercompany/hello-world                                                             0                              
armswdev/c-hello-world                     Simple hello-world C program on Alpine Linux…   0                              
businessgeeks00/hello-world-nodejs                                                         0
```
#### 显示前n条镜像
> docker search --limit n 镜像名称

```shell
[root@iZ8vbfaek3x3ogtpxnpnwfZ ~]# docker search --limit 5 redis
NAME                     DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
redis                    Redis is an open source key-value store that…   10851     [OK]
bitnami/redis            Bitnami Redis Docker Image                      214                  [OK]
bitnami/redis-sentinel   Bitnami Docker Image for Redis Sentinel         36                   [OK]
circleci/redis           CircleCI images for Redis                       12                   [OK]
bitnami/redis-exporter                                                   6
[root@iZ8vbfaek3x3ogtpxnpnwfZ ~]#

```

### 下载安装镜像到本地
> docker pull 镜像名称：标签版本号

没有tag就是最新版
```shell
[root@iZ8vbfaek3x3ogtpxnpnwfZ ~]# docker pull redis:6.0.8
6.0.8: Pulling from library/redis
bb79b6b2107f: Pull complete
1ed3521a5dcb: Pull complete
5999b99cee8f: Pull complete
3f806f5245c9: Pull complete
f8a4497572b2: Pull complete
eafe3b6b8d06: Pull complete
Digest: sha256:21db12e5ab3cc343e9376d655e8eabbdbe5516801373e95a8a9e66010c5b8819
Status: Downloaded newer image for redis:6.0.8
docker.io/library/redis:6.0.8
[root@iZ8vbfaek3x3ogtpxnpnwfZ ~]#

```
