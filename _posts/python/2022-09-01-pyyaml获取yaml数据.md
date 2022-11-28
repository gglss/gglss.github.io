---
layout: post
title:  "如何使用pyyaml获取yaml里面的数据"
date:   2022-08-31
excerpt: 在编写自动化时，怎么从yaml文件获取数据
tag:
- yaml
- python
- selenium
comments: false
---

##### 准备数据

在config目录下创建environment.yaml文件

```yaml
username: 周杰伦
password: 123456
```

##### 使用pyyaml获取yaml中的数据

###### 解析yaml文件

首先创建`yaml_config`文件，为了方便自动化后面的引用，需要创建一个类，在`__init__`里面打开yaml文件，使用`yaml.load(文件名称, Loader=yaml.FullLoader )`方法获取数据

打印出字典格式的数据`{'username': '周杰伦', 'password': 123456}`

```py
import yaml
from common.tools import get_project_path, sep


class GetConf:
    def __init__(self):
        with open(../config.environment.yaml), "r", encoding="utf-8")\
                as env_file:
            self.env = yaml.load(env_file, Loader=yaml.FullLoader)
```

**现在使用的是相对路径，后期如果换系统，或者更换文件位置，就需要自己获得文件路径，下面对代码进行优化**

##### 优化项：获得项目名称的url地址

创建`get_project_path方法`，获取项目根目录的绝对路径

首先定义一个变量，变量的值是项目的名称`project_name = "trading_system_autotest"`

获取当前文件的**所在目录的绝对路径**，需要使用**python的os模块**`file_path=os.path.dirname(__file__)`

在绝对路径中找到**项目名称的下标**位置`file_path.find(project_name)`

找到项目所在目录的绝对路径下标+项目名称的长度=项目根目录的绝对路径的下标`file_path.find(project_name)+len(project_name)`

然后对所在目录的绝对路径`file_path`进行切片获得**项目根目录的绝对路径**

`file_path[: file_path.find(project_name)+len(project_name)]`

```python
def get_project_path():
    """
    获取项目根目录的绝对路径
    :return:
    """
    project_name = "trading_system_autotest"
    # 获取当前文件的所在目录的绝对路径
    file_path = os.path.dirname(__file__)
    # # 在绝对路径中找到项目名称的下标位置
    # print(file_path.find(project_name))
    # 找到项目所在目录的绝对路径+项目名称的长度=项目的绝对路径
    # print(len(project_name))
    return file_path[: file_path.find(project_name)+len(project_name)]
```

##### 优化项：获得拼接后的目录和文件

创建`sep(path, add_sep_before=False, add_sep_after=False)方法`,获得文件和目录的拼接

**变量**

`path变量`需要传输一个列表，列表里面是文件所在目录和文件名称，如[文件所在目录，文件名称]

首先使用`os.sep.join`对列表的字段进行拼接`all_path = os.sep.join(path)`

对`add_sep_before`进行判断，如果是`True`,就在前面添加**拼接符**：`all_path = os.sep + all_path`

对`add_sep_after`进行判断，如果是`True`,就在后面添加**拼接符**：`all_path = all_path + os.sep`

**windows格式拼接符有可能错误**，就要对拼接符转换格式`all_path = all_path.replace('\\', '/')`,就算没有这个代码，也可以运行出来，只是调试该代码看起来不好看

然后返回`all_path`

```python
def sep(path, add_sep_before=False, add_sep_after=False):
    """
    :param path: is list    format:[Current directory , Current file]
    :param add_sep_before: Add before directory "/"
    :param add_sep_after: Add after directory "/"
    :return: Current directory/Current file
    """
    all_path = os.sep.join(path)
    # 在前面添加\
    if add_sep_before:
        all_path = os.sep + all_path
    # 在后面添加\
    if add_sep_after:
        all_path = all_path + os.sep
    # 转换格式 把\转换为/
    all_path = all_path.replace('\\', '/')
    return all_path
```

##### 优化后的代码

```python 
class GetConf:
    def __init__(self):
        with open(get_project_path()+sep(["config", "environment.yaml"], add_sep_before=True), "r", encoding="utf-8")\
                as env_file:
            self.env = yaml.load(env_file, Loader=yaml.FullLoader)
            print(self.env)

    def get_username_password(self):
        return self.env["username"], self.env["password"]
```

