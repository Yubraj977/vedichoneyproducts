from typing import Iterable
from django.db import models
from account.models import User
# Create your models here.

BLOG_STATUS = [
    ('published','PUBLISHED'),
    ('private','PRIVATE'),
]

class Blog(models.Model):
    title = models.CharField(max_length=255)
    url_slug = models.SlugField(null=True, blank=True, unique=True )
    thumbnail_url = models.ImageField(upload_to='blogs/thumbnails/', null=True,blank=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    content = models.TextField()
    status = models.CharField(max_length=255,choices=BLOG_STATUS, default="published")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title
    

    

