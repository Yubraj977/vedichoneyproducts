from django.urls import path
from blog import views
urlpatterns = [
    path('',views.BlogListAPI.as_view(), name="blog_list"),
    path('<int:pk>/',views.BlogDetailAPI.as_view(), name="blog_detail"),
]
