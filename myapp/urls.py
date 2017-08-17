from django.conf.urls import url, include
import views

urlpatterns = [
url(r'add_book$', views.add_book, ),
url(r'show_books$', views.show_books, ),
url(r'get_pic_urls$', views.get_pic_urls, ),
url(r'add_pic_urls$', views.add_pic_urls, ),
]
