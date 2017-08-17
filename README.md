# this is my first blog program

>@author:lvzu  
>@date:2017/08/17  
>@say something : hope to become a full-stack programer!  

## Technology Stack

vue.js vue-router python2 django mysql

## Program Tree
front:  
├── build  
├── config  
├── dist  
├── index.html  
├── node_modules  
├── package.json  
├── README.md  
├── src  
└── static  
back:  
configure  
├── __init__.py  
├── settings.py  
├── urls.py  
├── wsgi.py  
apps
├── admin.py  
├── apps.py  
├── __init__.py  
├── migrations  
├── models.py  
├── tests.py  
├── urls.py  
├── views.py  


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
