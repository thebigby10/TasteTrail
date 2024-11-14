from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('add/', views.add, name = 'add'),
    path('', views.all_post, name = 'all_post'),
    path('<uuid:post_id>', views.get_post, name = 'get_post' )
]
