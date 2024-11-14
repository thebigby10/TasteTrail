from recipe.models import post
from django.shortcuts import render

def addPost(request):
    if request.method == "POST":

        post.objects.create(
            
            title=request.POST['title'],
            imgUrl=request.POST['image'],
            tags=request.POST['tags'],
            location=request.POST['location'],
            ingredients=request.POST['ingredients'],
            description=request.POST['description'],
            comments=request.POST['comments'],

        )
        return render(request,'recipe_post.html',{"post":post})
    return render(request, "add_recipe.html")


