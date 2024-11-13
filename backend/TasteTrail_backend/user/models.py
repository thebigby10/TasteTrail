from django.db import models

# Create your models here.
class User(models.Model):
    fullName = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    imageUrl = models.URLField(max_length=1000)
