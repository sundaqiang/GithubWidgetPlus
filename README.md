## 起步
组件来源[http://bh-lay.com/labs/github-widget-user][1]、[https://github.com/typecho-fans/plugins/tree/master/GithubWidgetUser][1]，并在其中做了一些修改。

## 安装
 1. 下载
 2. 解压后把 `GithubWidgetPlus` 文件夹上传到插件目录。
 3. 启用插件，默认引入了jQuery，若已引入设置不引入可避免多次import jQuery。


<!--more-->


## 使用
#### 方式一、傻瓜式
在文章中创建一个class为`github-widget-push`的dom，并在data属性上增加用户参数即可，如下面代码所示。
```
<div class="github-widget-plus" data-content="github用户名  或  github用户名/github项目名"></div>
```
#### 方式二、自定义式
若对应dom上有`data-content`参数，JS函数中可以省略用户名参数，两者有冲突时，以JS传入为优先。
```
$('.some_class').github-widget-plus('github用户名  或  github用户名/github项目名');
```
## 效果

![效果展示][3]


  [1]: http://bh-lay.com/labs/github-widget-user
  [2]: https://github.com/typecho-fans/plugins/tree/master/GithubWidgetUser
  [3]: https://raw.githubusercontent.com/sundaqiang/GithubWidgetPlus/main/demo.jpg
