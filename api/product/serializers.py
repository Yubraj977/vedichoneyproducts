from rest_framework import serializers
from product.models import Category, Product
from django.utils.text import slugify
from product.models import Category,Product

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
    
    def create(self, validated_data):
        name = validated_data.get('name')
        url_slug = slugify(name)
        validated_data.setdefault('url_slug',url_slug)
        return Category.objects.create(**validated_data)



class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def create(self, validated_data):
        name = validated_data.get('name')
        url_slug = slugify(name)
        validated_data.setdefault('url_slug',url_slug)
        return Product.objects.create(**validated_data)
                