---
layout: post
title:  "解析ini文件用于数据驱动"
date:   2022-09-02
excerpt: 自动化测试时，该怎么解析ini文件里面的数据
tag:
- python
- pytest
- 自动化测试
comments: false
---

### 背景
+ PO设计模式是selenum自动化测试中比较好的设计模式
+ 在项目的开发过程中，UI界面上的元素不确定，会经常变化


### 过程解析
+ 在PyCharm创建ini文件
+ 创建一个可以解析ini文件的python模块(parse_ini)
+ 其他模块引用parse_ini文件里面的方法把ini文件解析出来


#### 创建ini文件
![image](https://img2020.cnblogs.com/blog/2267618/202112/2267618-20211203094356932-1130090177.png)


#### 创建parse_ini模块


	import configparser
	
	class Parse_Ini(object):
	
		def __init__(self):
			self.file = r"D:\dingdang_project\test\config.ini"
			self.parse = configparser.ConfigParser()
			self.parse.read(self.file, encoding="utf-8")
	
		def get_sections(self):
			"""
			:return: 由sections组成的列表
			"""
			return self.parse.sections()
	
		def get_options(self, sections):
			"""
			:return: 返回指定 section 中可用选项的列表。
			"""
			return self.parse.options(sections)
	
		def get_sections_options(self, sections, options):
			"""
			:param sections: 元素名称
			:param options: 元素地址
			:return: 指定sections下的options
			"""
			try:
				option = self.parse.get(sections, options)
				if ("-->" in option):
					option = tuple(option.split("-->"))
					return option
			except configparser.NoOptionError as e:
				return 'error: No option "{}" in section: "{}"'.format(options, sections)


	if __name__ == "__init__":
		pass


#### 举个栗子：

##### 栗子1
![image](https://img2020.cnblogs.com/blog/2267618/202112/2267618-20211207110806981-833489957.png)
###### 运行结果：
![image](https://img2020.cnblogs.com/blog/2267618/202112/2267618-20211207111506434-724799944.png)

##### 栗子2
![image](https://img2020.cnblogs.com/blog/2267618/202112/2267618-20211207111712353-1115225314.png)
###### 运行结果：
![image](https://img2020.cnblogs.com/blog/2267618/202112/2267618-20211207111750522-2033741252.png)
