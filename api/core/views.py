from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from core.models import Cart
from core.serializers import CartSerializer,CartPostSerializer
from rest_framework.permissions import IsAuthenticated
from product.models import Product
from product.serializers import ProductSerializer
from rest_framework import status


# Create your views here.
class CartListAPIView(APIView):
    # skip_auth_middleware = True
    permission_classes = [IsAuthenticated]
    def get(self,request,format=None):
        cart = Cart.objects.filter(user=request.user).order_by('-updated_at')
        serializer = CartSerializer(cart, many=True)
        return Response({'success':True,'data':serializer.data})
    
    def post(self,request, format=None):
        serializer = CartPostSerializer(data=request.data, context= {'user':request.user})
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            product_id = serializer.data.get('product')
            product_obj = Product.objects.filter(pk=product_id).first()
            product_info  = ProductSerializer(product_obj)
            cart_info = serializer.data
            cart_info['product'] = product_info.data
            return Response({'success':True, 'data':cart_info, 'message':'New item is added to cart.'})

class CartDetailAPIView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request,pk, format=None):
        try:
            cart_item = Cart.objects.get(pk=pk, user=request.user)
        except Cart.DoesNotExist as exp:
            return Response({'success':False,'message':'Cart item is not found'}, status=status.HTTP_400_BAD_REQUEST)
        serializer = CartSerializer(cart_item)
        return Response({'success':True,'data':serializer.data})
    
    def put(self, request, pk, format=None):
        try:
            cart_item = Cart.objects.get(pk=pk, user=request.user)
        except Cart.DoesNotExist as exp:
            return Response({'success':False,'message':'Cart item is not found'}, status=status.HTTP_400_BAD_REQUEST)
        serializer = CartPostSerializer(cart_item,request.data,context= {'user':request.user,'product':cart_item.product})
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            product_id = serializer.data.get('product')
            product_obj = Product.objects.filter(pk=product_id).first()
            product_info  = ProductSerializer(product_obj)
            cart_info = serializer.data
            cart_info['product'] = product_info.data
            return Response({'success':True, 'data':cart_info, 'message':'Cart item is updated.'})
        
    def patch(self, request, pk, format=None):
        try:
            cart_item = Cart.objects.get(pk=pk, user=request.user)
        except Cart.DoesNotExist as exp:
            return Response({'success':False,'message':'Cart item is not found'}, status=status.HTTP_400_BAD_REQUEST)
        serializer = CartPostSerializer(cart_item,request.data, partial=True,context= {'user':request.user,'product':cart_item.product})
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            product_id = serializer.data.get('product')
            product_obj = Product.objects.filter(pk=product_id).first()
            product_info  = ProductSerializer(product_obj)
            cart_info = serializer.data
            cart_info['product'] = product_info.data
            return Response({'success':True, 'data':cart_info, 'message':'Cart item is updated.'})
        

    def delete(self, request, pk, format=None):
        try:
            cart_item = Cart.objects.get(pk=pk, user=request.user)
        except Cart.DoesNotExist as exp:
            return Response({'success':False,'message':'Cart item is not found'}, status=status.HTTP_400_BAD_REQUEST)
        
        cart_item.delete()
        return Response({'success':True,'message':'Cart item is deleted.'})

    