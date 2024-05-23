from django.db import models

# Create your models here.
CATEGORY_STATUS = [
    ('active','ACTIVE'),
    ('inactive','INACTIVE')
]

PRODUCT_STATUS = [
    ('active','ACTIVE'),
    ('inactive','INACTIVE')
]

class Category(models.Model):
    name = models.CharField(max_length=255)
    url_slug = models.SlugField(null=True, blank=True, unique=True)
    status = models.CharField(max_length=50, choices=CATEGORY_STATUS, default="active")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.name
    

class Product(models.Model):
    name = models.CharField(max_length=255)
    url_slug = models.SlugField(null=True,blank=True, unique=True)
    category = models.ForeignKey(Category, on_delete=models.SET_DEFAULT, default=1)
    description = models.TextField()
    price = models.DecimalField(max_digits=10,decimal_places=2,null=False, blank=False)
    stock_quantity = models.IntegerField()
    status = models.CharField(max_length=50, choices=PRODUCT_STATUS, default="active")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.name

