from django.shortcuts import render
from django.http import HttpResponse

import json
from django.http import HttpResponse

from user.models import User

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

#/user/follow/{user_id}/
def follow(request, post_id):


#/user/unfollow/{user_id}/
def unfollow(request, post_id):
    return 1
