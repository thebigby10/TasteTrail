from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('add/', views.add, name = 'add'),
    path('', views.all_post, name = 'all_post'), #random 10 post
    path('user_email=<str:user_email>', views.all_posts, name = 'all_posts'),
    path('<uuid:post_id>', views.get_post, name = 'get_post' ),
    path('delete/<uuid:post_id>', views.delete, name = 'delete'),
    path('user_post/user_email=<str:user_email>', views.user_post, name = 'user_post'),
    path('trending/', views.trending, name = 'trending'),
    path('like/', views.like, name = 'like'),
    path('dislike/', views.dislike, name = 'dislike'),
    path('similar_post/<uuid:post_id>', views.similar_post, name = 'similar_post'),
    path('comment/<uuid:post_id>', views.comment, name = 'comment'),
    path('search/<str:keywords>', views.search, name = 'search'),
]
