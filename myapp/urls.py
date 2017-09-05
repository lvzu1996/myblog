# -*- coding: utf-8 -*-
from django.conf.urls import url, include
import views

urlpatterns = [
url(r'get_pic_urls$', views.get_pic_urls, ),
url(r'add_pic_urls$', views.add_pic_urls, ),
url(r'account_register$', views.account_register, ),
url(r'account_login$', views.account_login, ),
url(r'comment$', views.comment, ),
url(r'set_detailInfo$', views.set_detailInfo, ),

#测试api
url(r'test_model$', views.test_model, ),
url(r'test_model_fjy$', views.test_model_fjy, ),

]
