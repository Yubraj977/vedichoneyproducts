from rest_framework import serializers
from blog.models import Blog

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id','title', 'slug' ,'thumbnail_url', 'user','content','status','created_at','updated_at']
    

    def create(self, validated_data):
        user = self.context.get('user')
        validated_data.setdefault('user',user)
        blog = Blog.objects.create(**validated_data)
        return blog