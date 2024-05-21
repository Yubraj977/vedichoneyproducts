from rest_framework.views import APIView
from account.models import User
from vedichoneyproducts import settings
from .serializers import UserLoginSerializer, UserPasswordChangeSerializer, UserPasswordResetEmailSerializer, UserPasswordResetSerializer, UserRegisterationGoogleSerializer, UserRegisterationSerializer
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from .renderers import UserRenderer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


# helper funcs
def set_jwt_cookie(response:Response,tokens):
    response.set_cookie(
        key = settings.SIMPLE_JWT['AUTH_COOKIE'],
        value=tokens.get('access'),
        expires=settings.SIMPLE_JWT['ACCESS_TOKEN_LIFETIME'],
        secure=settings.SIMPLE_JWT['AUTH_COOKIE_SECURE'],
        httponly=settings.SIMPLE_JWT['AUTH_COOKIE_HTTP_ONLY'],
        samesite=settings.SIMPLE_JWT['AUTH_COOKIE_SAMESITE']
    )
    return response

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        refresh = super().get_token(user)

        # Add custom claims
        refresh['email'] = user.email
        refresh['profile_url'] = user.profile_url

        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }

# API VIews
class UserRegisterationAPIView(APIView):
    # renderer_classes = [UserRenderer]
    def post(self,request,format=None):
        serializer = UserRegisterationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            tokens = CustomTokenObtainPairSerializer.get_token(user)
            response = set_jwt_cookie(Response(),tokens)
            response.data = {'tokens':tokens, 'data':serializer.data ,'message':'User created.'}
            response.status_code = status.HTTP_201_CREATED
            return response
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class UserRegisterationGoogleAPIView(APIView):
    # renderer_classes = [UserRenderer]
    def post(self, request, format=None):
        serializer = UserRegisterationGoogleSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            # checking if user already exits
            user = User.objects.filter(email=serializer.validated_data.get('email')).first()
            if user is not None:
                tokens = CustomTokenObtainPairSerializer.get_token(user)
                response = set_jwt_cookie(Response(),tokens)
                response.data = {'tokens':tokens,'data':serializer.data,'message':'logged in.'}
                response.status_code = status.HTTP_201_CREATED
                return response
            else:
                user = serializer.save()
                tokens = CustomTokenObtainPairSerializer.get_token(user)
                response = set_jwt_cookie(Response(),tokens)
                response.data = {'tokens':tokens,'data':serializer.data,'message':'User created.'}
                response.status_code = status.HTTP_201_CREATED
                return response
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class UserLoginAPIView(APIView):
    # renderer_classes = [UserRenderer]
    def post(self, request, format=None):
        serializer = UserLoginSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            email = serializer.validated_data.get('email',None)
            password = serializer.validated_data.get('password',None)
            user = authenticate(email=email,password=password)
            if user is not None:
                tokens = CustomTokenObtainPairSerializer.get_token(user)
                response = set_jwt_cookie(Response(),tokens)
                serializer = UserLoginSerializer(user)
                response.data = {'tokens':tokens,'data':serializer.data,'message':'usre logged in.'}
                response.status_code = status.HTTP_200_OK
                return response
            return Response({"errors": "user credientials does not match."},status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    

class UserPasswordChange(APIView):
    permission_classes = [IsAuthenticated]
    # renderer_classes = [UserRenderer]
    def post(self,request, format=True):
        serializer = UserPasswordChangeSerializer(data=request.data,context={'user':request.user})
        if serializer.is_valid(raise_exception=True):
            return Response({'message':'password changed'},status=status.HTTP_200_OK)
  

#password reset
class UserPasswordRestEmailView(APIView): #password reset email send view
    # renderer_classes = [UserRenderer]
    def post(self,request, format=True):
        serializer = UserPasswordResetEmailSerializer(data= request.data)
        if serializer.is_valid(raise_exception=True):
            res = {
                'success':True,
                'message':'Password reset email sent to your email address. Check it out.'
            }
            return Response(res, status=status.HTTP_200_OK)
        

class UserPasswordResetView(APIView):
    # renderer_classes = [UserRenderer]
    def post(self, request, uid, token, format=True):
        serializer = UserPasswordResetSerializer(data=request.data, context= {'uid':uid,'token':token})
        if serializer.is_valid(raise_exception=True):
            res = {
                "success": True,
                "message": "Password changed successfully."
            }     
            return Response(res, status=status.HTTP_200_OK)

# test
class TestAPI(APIView):
    # renderer_classes =[UserRenderer]
    permission_classes = [IsAuthenticated]
    def get(self,request):
        return Response({'success':True})