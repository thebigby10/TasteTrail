from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=50)
    imgUrl = models.URLField(max_length=1000)
    tags = models.TextField()
    location = models.TextField()
    ingredients = models.TextField()
    description = models.TextField()
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)
    comments = models.JSONField(default=list)
