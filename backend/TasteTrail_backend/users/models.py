from django.db import models

# Create your models here.
class user(models.Model):
    full_name = models.CharField(max_length=100, null = False)
    email = models.CharField(max_length=100, unique = True)
    profile_pic_url = models.URLField(max_length=1000)

    def __str__(self):
        return self.full_name
