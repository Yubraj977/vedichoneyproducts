from django.urls import path
from . import views

urlpatterns = [
    path("register/", views.UserRegisterationAPIView.as_view(), name="register"),
    path("register/google/", views.UserRegisterationGoogleAPIView.as_view(), name="register_with_google"),
    path("login/", views.UserLoginAPIView.as_view(), name="login"),
    path("logout/", views.UserLogOutAPIView.as_view(), name="logout"),
    path("change-password/", views.UserPasswordChange.as_view(), name="change_password"),
    path("send-password-reset-email/", views.UserPasswordRestEmailView.as_view(), name="send_password_reset_email"),
    path("reset-password/<uid>/<token>/", views.UserPasswordResetView.as_view(), name="password_reset"),
    

    # test
    path("verify-token/",views.VerifyAccessToken.as_view(), name="verify_token"),
    path("test/",views.TestAPI.as_view(), name="Test"),

]
