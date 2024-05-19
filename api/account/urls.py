from django.urls import path
from . import views

urlpatterns = [
    path("register/", views.UserRegisterationAPIView.as_view(), name="register"),
    path("register/google/", views.UserRegisterationGoogleAPIView.as_view(), name="register_with_google"),
    path("login/", views.UserLoginAPIView.as_view(), name="login"),
    path("change-password/", views.UserPasswordChange.as_view(), name="change_password"),
    

    # test
    path("test/",views.TestAPI.as_view(), name="Test"),
]
