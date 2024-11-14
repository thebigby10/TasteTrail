from django.shortcuts import render
from django.http import HttpResponse

import json
from django.http import HttpResponse

from user.models import User
# Create your views here.
def register(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        fullname = data['fullName']
        email = data['email']
        imageUrl = data['imageUrl']

        if(User.objects.filter(email=email).exists()):
            return HttpResponse(status=409)
        else:
            user = User(fullName=fullname, email=email, imageUrl=imageUrl)
            user.save()
            return HttpResponse(status=200)