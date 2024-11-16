from django.db import models

# Create your models here.
class User(models.Model):
    fullName = models.CharField(max_length=100)
    email = models.CharField(max_length=100, primary_key=True, unique=True)
    imageUrl = models.URLField(max_length=1000)
    following = models.ManyToManyField('self', related_name='followers', blank=True)
    
    def __str__(self):
        return self.email
