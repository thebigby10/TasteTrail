from django.shortcuts import render
from django.http import HttpResponse

import json
from django.http import HttpResponse
from django.http import JsonResponse

from recipe.models import Recipe
from user.models import User

from django.forms.models import model_to_dict
from django.core import serializers

from django.views.decorators.csrf import csrf_exempt
# Create your views here.
@csrf_exempt
def add(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        # print(f"raw_data: {data}")
        title = data['title']
        imgUrl = data['imgUrl']
        if(not User.objects.filter(email = data['creator']).exists):
            return HttpResponse(status=409)
        user = User.objects.get(email=data['creator'])
        tags = data['tags']
        location = data['location']
        ingredients = data['ingredients']
        description = data['description']
        print(f"data: {title}, {imgUrl}, {user}, {tags}, {location}, {ingredients}, {description}")
        recipe = Recipe(title=title, imgUrl=imgUrl, user=user, tags=tags, location=location, ingredients=ingredients, description=description)
        recipe.save()
    return HttpResponse(status=200)

def all_post(request):
    if request.method == 'GET':
        recipes = Recipe.objects.all()
        recipe_list = []
        for recipe in recipes:
            # recipe.pk = recipe.postID
            recipe_list.append({'pk':recipe.postID,'data':model_to_dict(recipe)})
            # print(recipe[postID])
        return JsonResponse(recipe_list, status=200, safe=False)

def get_post(request, post_id):
    if request.method == 'GET':
        recipe = Recipe.objects.get(postID = post_id)
        recipe_dict = model_to_dict(recipe)
        return JsonResponse(recipe_dict, status=200, safe=False)

def delete(request, post_id):
    if request.method == 'DELETE':
        recipe = Recipe.objects.get(postID = post_id)
        recipe.delete()
        return HttpResponse(status=200)
