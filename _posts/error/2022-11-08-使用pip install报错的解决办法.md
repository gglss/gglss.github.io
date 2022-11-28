---
layout: post
title:  "使用pip install报错的解决办法"
date:   2022-08-26
excerpt: 使用pip安装locust时报错：ERROR：Failed building wheel for psutil
tag:
- error
comments: false 
---
## 报错提示

今天使用PyCharm下载一个模块`pip.exe install locust`，有错误提示

```python
https://visualstudio.microsoft.com/visual-cpp-build-tools/
  [end of output]
  
  note: This error originates from a subprocess, and is likely not a problem with pip.
  // 报错位置
  ERROR: Failed building wheel for psutil

ERROR: Could not build wheels for psutil, which is required to install pyproject.toml-based projects
WARNING: Ignoring invalid distribution -ip (d:\work software\python3.8\lib\site-packages)
WARNING: Ignoring invalid distribution -ip (d:\work software\python3.8\lib\site-packages)
WARNING: Ignoring invalid distribution -ip (d:\work software\python3.8\lib\site-packages)
```
## 原因

> 缺少对应的`whl`文件

## 解决办法

碰到了这个错误`ERROR: Failed building wheel for psutil`，就需要下载`psutil.whl`

在[下载网站](https://www.lfd.uci.edu/~gohlke/pythonlibs/#_pandas)点击进入网站

下载`psutil-5.9.0-cp38-cp38-win_amd64.whl`文件

然后使用（pip install 文件的绝对路径）进行安装，然后使用`pip.exe install locust`正常安装

```python

pip.exe install D:\Appium\psutil-5.9.0-cp38-cp38-win_amd64.whl

pip.exe install locust

```
