from django.db import models
from user.models import user
# Create your models here.

class post(models.Model):
    postID = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    imgUrl = models.URLField(max_length=1000)
    tags = models.TextField()
    location = models.TextField()
    ingredients = models.TextField()
    description = models.TextField()
    comment = models.JSONField()

class LikeDislike(models.Model):
    postID = models.ForeignKey(post, on_delete=models.CASCADE)
    userID = models.ForeignKey(user, on_delete=models.CASCADE)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)

    def __str__(self):
        return self.postID
