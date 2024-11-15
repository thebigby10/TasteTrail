from django.db import models
from user.models import User
import uuid

import datetime

# Create your models here.
class Recipe(models.Model):
    postID = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    title = models.CharField(max_length=100)
    imgUrl = models.URLField(max_length=1000)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tags = models.JSONField(default = list)
    location = models.TextField()
    ingredients = models.JSONField(default = list)
    description = models.TextField()
    likes = models.JSONField(default=list)
    dislikes = models.JSONField(default=list)
    comments = models.JSONField(default=list)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class TrendingRecipe(models.Model):
    postID = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    trend_score = models.FloatField(default=0)

    def __str__(self):
        return self.title
