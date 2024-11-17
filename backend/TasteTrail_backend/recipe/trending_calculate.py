from recipe.models import Recipe,TrendingRecipe

from django.http import HttpResponse
# from django_q2.tasks import async_task

def triggerTask(request):
    async_task('recipe.trending_calculate.calculateTrending')

    # Queue the send_email task
    async_task('myapp.tasks.send_email', 'user@example.com')
    return HttpResponse("calculateTrending has been queued!")

    return HttpResponse("Tasks have been triggered!")

def calculateTrending():
    TrendingRecipe.objects.all().delete()

    # needs fixing iguess
    t_recipes = Recipe.objects.filter(created_at__gte=timezone.now() - timedelta(days=7))

    trending_post = []
    for recipe in t_recipes:
        like_dislike_factor = (recipe.likes.count() - recipe.dislikes.count()) / (1+ recipe.dislikes.count())
        time_decay = 1 / (1 + recipe.created_at - timezone.now())
        trending_score = like_dislike_factor *0.7 + time_decay * 0.3
        TrendingRecipe.save(TrendingRecipe(recipe.postID,trending_score))
        # trending_post.append({'pk':recipe.postID,'score':trending_score})
    # sorted(trending_post, key=lambda recipe: recipe['score'], reverse=True)
