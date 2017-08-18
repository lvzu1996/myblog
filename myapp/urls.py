from django.conf.urls import url, include
import views

urlpatterns = [
url(r'get_pic_urls$', views.get_pic_urls, ),
url(r'add_pic_urls$', views.add_pic_urls, ),
url(r'add_account$', views.add_account, ),
]
