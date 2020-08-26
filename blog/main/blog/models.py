from django.db import models
from datetime import date

# Create your models here.
class Post(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(unique=True)
    author = models.CharField(max_length=100)
    date = models.DateField(default=date.today)
    content = models.TextField()

    class Meta:
        ordering = ['-date']

    def __str__(self):
        return self.title