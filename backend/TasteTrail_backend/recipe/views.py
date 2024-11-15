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

import datetime

# Create your views here.

# recipe/add/
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

# recipe?user_email={user_email}
def all_post(request, user_email):
    # send only 10 posts at a time
    # following : 4
    # Trending : 4
    # Random : 2

    if request.method == 'GET':
        recipes = Recipe.objects.all()
        # get all the recipes from following
        following = User.objects.get(email='test@gmail.com').following.all()
        # get all the trending recipes

        # get all the random recipes
        recipe_list = []
        for recipe in recipes:
            # recipe.pk = recipe.postID
            recipe_list.append({'pk':recipe.postID,'data':model_to_dict(recipe)})
            # print(recipe[postID])
        return JsonResponse(recipe_list, status=200, safe=False)

def trending(request):
    if request.method == 'GET':
        return -1;

def calculateTrending():
    t_recipes = Recipe.objects.filter(timezone.now() - created_at < timedelta(days=7))
    trending_post = []
    for recipe in t_recipes:
        like_dislike_factor = (recipe.likes.count() - recipe.dislikes.count()) / (1+ recipe.dislikes.count())
        time_decay = 1 / (1 + recipe.created_at - timezone.now())
        trending_score = like_dislike_factor *0.7 + time_decay * 0.3


# /recipe/{post_id}/
def get_post(request, post_id):
    if request.method == 'GET':
        recipe = Recipe.objects.get(postID = post_id)
        recipe_dict = model_to_dict(recipe)
        return JsonResponse(recipe_dict, status=200, safe=False)

# /recipe/delete/{post_id}/
def delete(request, post_id):
    if request.method == 'DELETE':
        recipe = Recipe.objects.get(postID = post_id)
        recipe.delete()
        return HttpResponse(status=200)

#/recipe/like?postID={postID}

#/recipe/user_postuser_email={user_email}/
def user_post(request,user_email):
    # user_email = request.GET.get('user_email', None)
    print(user_email)
    user = User.objects.get(email=user_email)
    posts = Recipe.objects.filter(user_id=user_email)
    posts_json = []
    for post in posts:
        posts_json.append({'pk':post.postID,'data':model_to_dict(post)})
    return JsonResponse(posts_json, status=200, safe=False)

# path('user_post/user_email=<str:user_email>', views.user_post, name = 'user_post'),
