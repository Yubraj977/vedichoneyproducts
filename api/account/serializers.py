from rest_framework import serializers
from .models import User
import uuid
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str,force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from account.utils import send_password_reset_mail

class UserRegisterationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type':'password'}, write_only=True)
    class Meta:
        model = User
        fields = ['id','email','name','password','password2','phone_number','profile_url','profile_img','is_staff']
        extra_kwargs = {
            'password':{'write_only':True,},
        }
    

    def validate(self, attrs):
        password= attrs.get('password')
        password2 = attrs.get('password2')

        if password != password2:
            raise serializers.ValidationError("Passowrd doesn't match.")
        return attrs
    
    def create(self, validated_data:dict):
        validated_data.pop('password2')
        return User.objects.create_user(**validated_data)
    
    
class UserRegisterationGoogleSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    class Meta:
        model = User
        fields =  ['id','email','name','phone_number','profile_url','profile_img','is_staff']

    def create(self, validated_data:dict):
        password = str(uuid.uuid4())
        print(password)
        validated_data.setdefault('password',password)
        return User.objects.create_user(**validated_data)

class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    class Meta:
        model = User
        fields = ['id','email','password','name','phone_number','profile_url','profile_img','is_staff']
        extra_kwargs = {
            'password':{'write_only':True,},
        }

class UserPasswordChangeSerializer(serializers.Serializer):
    password1 = serializers.CharField(max_length=20)
    password2 = serializers.CharField(max_length=20)

    class Meta:
        fields = ['password1','password2']

    def validate(self, attrs):
        password1 = attrs.get('password1')
        password2 = attrs.get('password2')
        if password1 != password2:
            raise serializers.ValidationError("Password doesn't match")
        
        user = self.context.get('user')
        user.set_password(password1)
        user.save()
        return attrs
    
class UserPasswordResetEmailSerializer(serializers.Serializer):
    email = serializers.EmailField()
    class Meta:
        fields = ['email']

    def validate(self, attrs): # logic to generate url for pw reset and sending email
        email = attrs.get('email')
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist as exp:
            raise serializers.ValidationError('user not found with your email address')
        
        uid = urlsafe_base64_encode(force_bytes(user.id))
        pw_reset_token = PasswordResetTokenGenerator().make_token(user)
        pw_reset_url = f"http://localhost:5173/account/rest-password/{uid}/{pw_reset_token}"

        #send mail to user
        send_password_reset_mail(user.name,email,pw_reset_url)
        
        return attrs

class UserPasswordResetSerializer(serializers.Serializer): #serializer to reset the password of user
    password1 = serializers.CharField(max_length=20)
    password2 = serializers.CharField(max_length=20)

    class Meta:
        fields = ['password1','password2']

    def validate(self, attrs):
        try:
            password1 = attrs.get('password1')
            password2 = attrs.get('password2')
            if password1 != password2:
                raise serializers.ValidationError("Password doesn't match")
            
            uid = self.context.get('uid')
            token = self.context.get('token')

            uid_decoded = smart_str(urlsafe_base64_decode(uid)) #decoding the uid
            try:
                user = User.objects.get(pk=uid_decoded)
            except User.DoesNotExist as exp: #if user does not exist thorw error
                raise serializers.ValidationError("User does not exist.")
            
            if not PasswordResetTokenGenerator().check_token(user,token): #checking the password reset token is valid for the usr or not
                raise serializers.ValidationError('Token is not valid or expired.')
            
            user.set_password(password1)
            user.save()
            return attrs
        
        except DjangoUnicodeDecodeError as identifier:
            PasswordResetTokenGenerator().check_token(user,token)
            raise serializers.ValidationError('Token is not valid or expired.')