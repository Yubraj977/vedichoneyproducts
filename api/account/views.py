from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import DashboardSerializer, UserLoginSerializer, UserPasswordChangeSerializer, UserRegisterationSerializer
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class UserRegisterationAPIView(APIView):
    def post(self,request,format=None):
        serializer = UserRegisterationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            tokens = get_tokens_for_user(user)
            return Response({'tokens':tokens,'message':'User created.'},status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class UserLoginAPIView(APIView):
    def post(self, request, format=None):
        serializer = UserLoginSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            user = authenticate(**serializer.data)
            if user is not None:
                tokens= get_tokens_for_user(user)
                return Response({'tokens':tokens,'message':'usre logged in.'},status=status.HTTP_200_OK)
            return Response({"errors":{"username":"user with this username not exist."}},status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    

class DashboardViewAPI(APIView):
    permission_classes = [IsAuthenticated]
    def get(self,request,format=None):
        user = request.user
        print(user)
        print(type(user))
        serializer = DashboardSerializer(request.user)
        return Response(serializer.data,status=status.HTTP_200_OK)


class UserPasswordChange(APIView):
    permission_classes = [IsAuthenticated]
    def post(self,request, format=True):
        serializer = UserPasswordChangeSerializer(data=request.data,context={'user':request.user})
        if serializer.is_valid(raise_exception=True):
            return Response({'message':'password changed'},status=status.HTTP_200_OK)



# user password change
#password reset