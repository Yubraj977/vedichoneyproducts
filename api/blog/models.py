from django.db import models
from account.models import User
# Create your models here.

BLOG_STATUS = [
    ('published','PUBLISHED'),
    ('private','PRIVATE'),
]

class Blog(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True )
    thumbnail_url = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    content = models.TextField()
    status = models.CharField(max_length=255,choices=BLOG_STATUS, default="published")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title
