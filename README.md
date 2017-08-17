# this is my first blog program

>@author:lvzu  
>@date:2017/08/17  
>@say something : hope to become a full-stack programer!  

## Technology Stack

vue.js vue-router python2 django mysql

## Program Tree
front:  
├── build --编译配置    
├── config  
├── dist  --编译后引用目录  
├── index.html  --本地测试页面  
├── node_modules  --依赖包  
├── package.json  --依赖项  
├── README.md  
├── src  --源码
└── static  --本地测试静态资源  
back:  
configure  
├── __init__.py  
├── settings.py  --django项目配置文件  
├── urls.py  --django项目路由配置  
├── wsgi.py  
apps  
├── admin.py  
├── apps.py  
├── __init__.py  
├── migrations  
├── models.py  --model文件，用于自动生成mysql表  
├── tests.py  
├── urls.py  
├── views.py  --app页面，本例中展示了两个接口  


## Build Setup

``` bash
# git clone
git clone https://github.com/lvzu1996/myblog.git

# install dependencies
cd blogfront  
npm install

# build for production with minification
npm run build

# mysql configure
lvzuBlog/settings.py  

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'myblog',
        'USER': 'root',//your database username
        'PASSWORD': '',//your password
        'HOST': '127.0.0.1',
    }
}

#run this programe
cd lvzuBlog
python manage.py runserver
```

For detailed explanation on how things work  
contact with lvzu  
>wechat:lvzu_lvzu  
qq:385162733
