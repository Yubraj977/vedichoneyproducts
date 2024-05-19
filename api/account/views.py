from django.shortcuts import render
from rest_framework.views import APIView

from account.models import User
from .serializers import DashboardSerializer, UserLoginSerializer, UserPasswordChangeSerializer, UserRegisterationGoogleSerializer, UserRegisterationSerializer
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated,IsAuthenticatedOrReadOnly
from .renderers import UserRenderer

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class UserRegisterationAPIView(APIView):
    renderer_classes = [UserRenderer]
    def post(self,request,format=None):
        serializer = UserRegisterationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            tokens = get_tokens_for_user(user)
            return Response({'tokens':tokens,'message':'User created.'},status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class UserRegisterationGoogleAPIView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request, format=None):
        serializer = UserRegisterationGoogleSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            # checking if user already exits
            user = User.objects.filter(email=serializer.validated_data.get('email')).first()
            print(user)
            if user is not None:
                tokens = get_tokens_for_user(user)
                return Response({'tokens':tokens,'message':'logged in.'},status=status.HTTP_201_CREATED)
            else:
                user = serializer.save()
                tokens = get_tokens_for_user(user)
                return Response({'tokens':tokens,'message':'User created.'},status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class UserLoginAPIView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request, format=None):
        serializer = UserLoginSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            user = authenticate(**serializer.data)
            if user is not None:
                tokens= get_tokens_for_user(user)
                return Response({'tokens':tokens,'message':'usre logged in.'},status=status.HTTP_200_OK)
            return Response({"errors":{"email":"user with this email not exist."}},status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    


class DashboardViewAPI(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    def get(self,request,format=None):
        user = request.user
        print(user)
        print(type(user))
        serializer = DashboardSerializer(request.user)
        return Response(serializer.data,status=status.HTTP_200_OK)


class UserPasswordChange(APIView):
    permission_classes = [IsAuthenticated]
    renderer_classes = [UserRenderer]
    def post(self,request, format=True):
        serializer = UserPasswordChangeSerializer(data=request.data,context={'user':request.user})
        if serializer.is_valid(raise_exception=True):
            return Response({'message':'password changed'},status=status.HTTP_200_OK)
  

# user password change
#password reset


# test
class TestAPI(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    def get(self,request):
        return Response({'success':True})