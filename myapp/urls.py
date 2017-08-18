from django.conf.urls import url, include
import views

urlpatterns = [
url(r'get_pic_urls$', views.get_pic_urls, ),
url(r'add_pic_urls$', views.add_pic_urls, ),
url(r'account_register$', views.account_register, ),
url(r'account_login$', views.account_login, ),

]
