from django.shortcuts import render
from django.http import HttpResponse

import json
from django.http import HttpResponse, JsonResponse

from user.models import User

from django.forms.models import model_to_dict

from django.views.decorators.csrf import csrf_exempt


# user/register/
# Create your views here.
@csrf_exempt
def register(request):
    if request.method == 'POST':
        print("register")
        data = json.loads(request.body)
        print("loaded data")
        fullname = data['fullName']
        email = data['email']
        imageUrl = data['imageUrl']
        print(f"raw_data:{data}")
        print(f"data: {fullname}, {email}, {imageUrl}")
        if(User.objects.filter(email=email).exists()):
            return HttpResponse(status=409)
        else:
            user = User(fullName=fullname, email=email, imageUrl=imageUrl)
            user.save()
            return HttpResponse(status=200)
    else:
        return HttpResponse(status=400)

# user/user_info/{user_email}/
def user_info(request, user_email):
    user = User.objects.get(email=user_email)
    print(user)
    return JsonResponse(model_to_dict(user), status=200, safe=False)

#/user/followings/{user_email}/
def followings(request, user_email):
    print(user_email)
    user = User.objects.get(email=user_email)
    followers = user.following.all()
    followers_json = []
    for follower in followers:
        user = User.objects.get(email=follower.email)
        followers_json.append(model_to_dict(user))
    return JsonResponse(followers_json, status=200, safe=False)

#/user/followers/{user_email}/
def followers(request, user_email):
    print(user_email)
    user = User.objects.get(email=user_email)
    followers = user.followers.all()
    followers_json = []
    for follower in followers:
        user = User.objects.get(email=follower.email)
        followers_json.append(model_to_dict(user))
    return JsonResponse(followers_json, status=200, safe=False)



#/user/follow/
def follow(request):
    data = json.loads(request.body)
    follower_email = data['followerEmail']
    following_email = data['followingEmail']
    follower_user = User.objects.get(email=follower_email)
    following_user = User.objects.get(email=following_email)
    follower_user.following_user.append(following_user)
    following_user.followers_user.append(follower_user)
    return HttpResponse(status=200)


#/user/unfollow/
def unfollow(request):
    data = json.loads(request.body)
    unfollower_email = data['unfollowerEmail']
    unfollowing_email = data['unfollowingEmail']
    unfollower_user = User.objects.get(email=unfollower_email)
    unfollowing_user = User.objects.get(email=unfollowing_email)
    unfollower_user.following_user.remove(unfollowing_user)
    unfollowing_user.followers_user.remove(unfollower_user)
    return HttpResponse(status=200)
