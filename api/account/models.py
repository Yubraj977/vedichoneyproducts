from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext as _
from django.db import models

# model manager
class CustomUserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifier
    for authentication instead of usernames.
    """

    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError(_('Users must have an email address'))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))
        return self.create_user(email, password, **extra_fields)


# model
class User(AbstractUser):
    email = models.EmailField(_('email address'), max_length=255, unique=True)
    name = models.CharField('full name',max_length=255,null=True,blank=True)    
    profile_url = models.CharField('profile url',max_length=255, null=True,blank=True)
    profile_img = models.ImageField('profile image',upload_to='users/profile_pics/', null=True, blank=True)
    phone_number = models.CharField('phone number',max_length=15,null=True,blank=True)

    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ('name',)

    objects = CustomUserManager()

    def __str__(self):
        return self.email

