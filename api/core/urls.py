from django.urls import path
from core import views

urlpatterns = [
    path('user/carts/', views.CartListAPIView.as_view(), name="user_cart_list"),
    path('user/carts/<int:pk>/', views.CartDetailAPIView.as_view(), name="user_cart_item"),
]
