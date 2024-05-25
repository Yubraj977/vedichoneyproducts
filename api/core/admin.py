from django.contrib import admin
from core.models import Cart

# Register your models here.
@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ['id','user','product','quantity','updated_at','created_at']