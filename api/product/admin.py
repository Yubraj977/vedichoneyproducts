from django.contrib import admin
from product.models import Category,Product

class ProductAdmin(admin.ModelAdmin):
    list_display = ['id','name','category','stock_quantity','price','status']
    prepopulated_fields = {
        'url_slug':('name',)
    }
    list_filter = ['status','category']

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id','name','status']
    prepopulated_fields = {
        'url_slug':('name',)
    }
    list_filter = ['status']

# Register your models here.
admin.site.register(Category,CategoryAdmin)
admin.site.register(Product, ProductAdmin)
