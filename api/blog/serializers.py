from rest_framework import serializers
from blog.models import Blog
from django.utils.text import slugify

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id','title', 'url_slug' ,'thumbnail_url', 'user','content','status','created_at','updated_at']
    

    def create(self, validated_data):
        user = self.context.get('user')
        title = validated_data.get('title')
        url_slug = slugify(title)
        validated_data.setdefault('user',user)
        validated_data.setdefault('url_slug',url_slug)
        blog = Blog.objects.create(**validated_data)
        return blog