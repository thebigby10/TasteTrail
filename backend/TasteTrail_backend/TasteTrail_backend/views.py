from django.shortcuts import render
from django.http import HttpResponse

from recipe.models import Recipe
from user.models import User

def delete_all(request):
    all_user = User.objects.all()
    all_recipe = Recipe.objects.all()
    for user in all_user:
        user.delete()
    for recipe in all_recipe:
        recipe.delete()
    return HttpResponse(status=200)
