# this is my first blog program

> heading to become a full-stack programer!

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
