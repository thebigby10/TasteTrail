from django.shortcuts import render
from django.http import HttpResponse

import json
from django.http import HttpResponse
from django.http import JsonResponse

from recipe.models import Recipe,TrendingRecipe
from user.models import User


from django.forms.models import model_to_dict
from django.core import serializers

from django.views.decorators.csrf import csrf_exempt

import datetime
import random

from datetime import datetime, timezone
from django.utils.timesince import timesince

# from recipe.trending_calculate import trigger_task

from rapidfuzz import fuzz

# Create your views here.

# recipe/add/
@csrf_exempt
def add(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(f"raw_data: {data}")
        title = data['title']
        imgUrl = data['imgUrl']
        if(not User.objects.filter(email = data['creator']).exists):
            return HttpResponse(status=409)
        user = User.objects.get(email=data['creator'])
        tags = data['tags']
        location = data['location']
        ingredients = data['ingredients']
        description = data['description']
        # print(f"data: {title}, {imgUrl}, {user}, {tags}, {location}, {ingredients}, {description}")
        recipe = Recipe(title=title, imgUrl=imgUrl, user=user, tags=tags, location=location, ingredients=ingredients, description=description)
        recipe.save()
        return HttpResponse(status=200)
    else:
        return HttpResponse(status=400)

#return random 10 posts
#recipe/
def all_post(request):
    if request.method == 'GET':
        recipes = Recipe.objects.order_by('?')[:10]
        recipe_list = []
        # get all the random recipes
        for recipe in recipes:
            # recipe.pk = recipe.postID
            # recipex = recipe
            user = User.objects.get(email=recipe.user_id)
            recipe.userID = {'fullName':user.fullName,'email':user.email,'imageUrl':user.imageUrl}
            created_at = recipe.created_at
            time_diff = timesince(created_at, datetime.now(timezone.utc))
            recipe_list.append({'pk':recipe.postID,'user':recipe.userID,'data':model_to_dict(recipe), 'created_at':f"{time_diff} ago"})
            # print(recipe.userID)
            # print(recipe[postID])
        return JsonResponse(recipe_list, status=200, safe=False)

# recipe?user_email={user_email}
def all_posts(request, user_email):
    # send only 10 posts at a time
    # following : 4
    # Trending : 4
    # Random : 2

    if request.method == 'GET':
        recipes = Recipe.objects.all()
        # get all the recipes from following
        following = User.objects.get(email='test@gmail.com').following.all()
        # get all the trending recipes
        trending = calculateTrending()
        # get all the random recipes
        recipe_list = []
        for recipe in recipes:
            # recipe.pk = recipe.postID
            recipe_list.append({'pk':recipe.postID,'data':model_to_dict(recipe)})
            # print(recipe[postID])
        return JsonResponse(recipe_list, status=200, safe=False)

# recipe/trending/
def trending(request):
    recipes = Recipe.objects.order_by('-likes')[:15]
    if request.method == 'GET':
        recipe_list = []
        for recipe in recipes:
            recipe_list.append({'pk':recipe.postID,'data':model_to_dict(recipe)})
        return JsonResponse(recipe_list, status=200, safe=False)

def get_trending():
    trending = TrendingRecipe.objects.all()
    trending_list = []
    for recipe in trending:
        trending_list.append(recipe)
    return trending_list


# /recipe/{post_id}/
def get_post(request, post_id):
    if request.method == 'GET':
        recipe = Recipe.objects.get(postID = post_id)
        recipe_dict = model_to_dict(recipe)
        return JsonResponse(recipe_dict, status=200, safe=False)

# /recipe/delete/{post_id}/
@csrf_exempt
def delete(request, post_id):
    if request.method == 'DELETE':
        recipe = Recipe.objects.get(postID = post_id)
        recipe.delete()
        return HttpResponse(status=200)

#/recipe/like?postID={postID}

#/recipe/user_post/user_email={user_email}/

@csrf_exempt

def user_post(request, user_email):

    # user_email = request.GET.get('user_email', None)
    print(user_email)
    user = User.objects.get(email=user_email)

    posts = Recipe.objects.filter(user_id=user_email).order_by("-created_at")

    posts = Recipe.objects.filter(user_id=user_email).order_by('-created_at')

def user_post(request, user_email):
    # user_email = request.GET.get('user_email', None)
    print(user_email)
    user = User.objects.get(email=user_email)
    posts = Recipe.objects.filter(user_id=user_email).order_by('-created_at')
    posts_json = []
    for post in posts:
        post.userID = {'fullName':user.fullName,'email':user.email,'imageUrl':user.imageUrl}
        created_at = post.created_at
        time_diff = timesince(created_at, datetime.now(timezone.utc))
        posts_json.append({'pk':post.postID,'user':post.userID,'data':model_to_dict(post), 'created_at':f"{time_diff} ago"})
        # print(recipe.userID)
        # print(recipe[postID])

    return JsonResponse(posts_json, status=200, safe=False)

# path('user_post/user_email=<str:user_email>', views.user_post, name = 'user_post'),

def run_tasks(request):
    message = trigger_task()
    return HttpResponse(message)

# recipe/like/
@csrf_exempt
def like(request):
    if request.method == 'PUT':
        data = json.loads(request.body)
        postID = data['postID']
        userEmail = data['userEmail']
        recipe = Recipe.objects.get(postID = postID)
        recipe_likes = recipe.likes
        # print(recipe_likes)
        #find if the user already liked the recipe
        if userEmail not in recipe_likes:
            recipe_likes.append(userEmail)
            recipe_dislikes = recipe.dislikes
            if userEmail in recipe_dislikes:
                recipe_dislikes.remove(userEmail)
            recipe.save()
            return HttpResponse(status=200)
        else:
            recipe_likes.remove(userEmail)
            recipe.save()
            return HttpResponse(status=200)
        # if(recipe.likes.count(user_email) == 0):
            # recipe.likes.append(user_email)
            # recipe.save()
        # return HttpResponse(status=200)


# recipe/dislike/
@csrf_exempt
def dislike(request):
    if request.method == 'PUT':
        data = json.loads(request.body)
        postID = data['postID']
        userEmail = data['userEmail']
        recipe = Recipe.objects.get(postID = postID)
        recipe_dislikes = recipe.dislikes
        # print(recipe_likes)
        #find if the user already liked the recipe
        if userEmail not in recipe_dislikes:
            recipe_dislikes.append(userEmail)
            recipe_likes = recipe.likes
            if userEmail in recipe_likes:
                recipe_likes.remove(userEmail)
            recipe.save()
            return HttpResponse(status=200)
        else:
            recipe_dislikes.remove(userEmail)
            recipe.save()
            return HttpResponse(status=200)
        # if(recipe.likes.count(user_email) == 0):
            # recipe.likes.append(user_email)
            # recipe.save()
        # return HttpResponse(status=200)
        # return HttpResponse(status=200)

# recipe/similar_post/{post_id}
def similar_post(request, post_id):
    # match based on tag similarity
    post = Recipe.objects.get(postID = post_id)
    all_post = Recipe.objects.all()
    similar_post = []
    similarity = []
    for recipe in all_post:
        # print(recipe.tags)
        similarity_value = fuzz.QRatio(" ".join(recipe.tags), " ".join(post.tags))
        similarity.append((recipe, similarity_value))
    # print(post_with_score)
    similarity.sort(key = lambda x: x[1], reverse=True)
    # return JsonResponse(post_with_score, status=200, safe=False)
    # similarity_json = model_to_dict(similarity[:10])
    similarity_json = []
    for recipe in similarity[:10]:

        similarity_json.append({
            'pk': recipe[0].postID,
            'user' : model_to_dict(User.objects.get(email=recipe[0].user_id)),
            'data': model_to_dict(recipe[0])
        })
    return JsonResponse(similarity_json, status=200, safe=False)

# /recipe/search/keywords/
def search(request, keywords):
    print(keywords)
    recipes = Recipe.objects.all()
    similar_recipes_with_score = []
    for recipe in recipes:
        similarity_value = fuzz.QRatio(keywords, " ".join(recipe.tags)+" "+recipe.title+" "+" ".join(recipe.ingredients)+" "+recipe.location)
        similar_recipes_with_score.append((recipe, similarity_value))
    similar_recipes_with_score.sort(key = lambda x: x[1], reverse=True)
    similarity_json = []
    for recipe in similar_recipes_with_score[:3]:
        similarity_json.append({
            'pk': recipe[0].postID,
            'user' : model_to_dict(User.objects.get(email=recipe[0].user_id)),
            'data': model_to_dict(recipe[0])
        })
    return JsonResponse(similarity_json, status=200, safe=False)


#recipe/comment/{post_id}/
@csrf_exempt
def comment(request, post_id):
    if request.method == 'POST':
        
        return HttpResponse(status=200)

