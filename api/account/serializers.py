from rest_framework import serializers
from django.contrib.auth.models import User

class UserRegisterationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type':'password'}, write_only=True)
    class Meta:
        model = User
        fields = ['id','username','first_name','last_name','password','password2']
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


class UserLoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=255)
    class Meta:
        model = User
        fields = ['username','password']


class UserPasswordChangeSerializer(serializers.Serializer):
    password1 = serializers.CharField(max_length=255)
    password2 = serializers.CharField(max_length=255)

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
    
    
class DashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields = ['id','username','first_name','last_name']
