from django.contrib import admin
from django.urls import path, include
from . import views
urlpatterns = [
    path('register/', views.register, name = 'register'),
    path('followings/<str:user_email>',views.followings, name = 'followers'),
    path('followers/<str:user_email>',views.followers, name = 'followers'),
    path('follow/',views.follow, name = 'follow'),
    path('unfollow/',views.unfollow, name = 'unfollow'),
    
]