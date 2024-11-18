from django.contrib import admin
from django.urls import path, include

import os
from dotenv import load_dotenv
load_dotenv()

ROOT_PASSWORD = os.getenv('ROOT_PASSWORD')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('user/', include('user.urls'), name = "user"),
    path('recipe/', include('recipe.urls'), name = "recipe"),
    path(f'{ROOT_PASSWORD}/delete_all/',views.delete_all, name = 'delete_all' )
]
