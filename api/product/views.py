from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from product.serializers import CategorySerializer, ProductSerializer
from product.models import Category,Product
from product.permissions import ReadOnlyOrIsAdminUser

class CategoryListAPI(APIView):
    permission_classes = [ReadOnlyOrIsAdminUser,]
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response({'success':True,'message':'list of available categories.','data':serializer.data},status=status.HTTP_200_OK)
    
    def post(self,request, format=None):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({'success':True,'message':'new category created','data':serializer.data}, status= status.HTTP_201_CREATED)



class CategoryDetailAPI(APIView):
    permission_classes = [ReadOnlyOrIsAdminUser,]
    def get(self,request,pk,format=None):
        try:
            category = Category.objects.get(pk=pk)
        except Category.DoesNotExist as exp:
            return Response({'success':False,'message':'Requested resource does not found.'},status=status.HTTP_204_NO_CONTENT)
        
        serializer = CategorySerializer(category)
        return Response({'success':True,'data':serializer.data},status=status.HTTP_200_OK)
    
    def put(self, request, pk, format=None):
        try:
            category = Category.objects.get(pk=pk)
        except Category.DoesNotExist as exp:
            return Response({'success':False,'message':'Requested resource does not found.'},status=status.HTTP_204_NO_CONTENT)
        
        serializer = CategorySerializer(category,request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({'success':True,'message':'category is updated.','data':serializer.data},status=status.HTTP_200_OK)
        
    
    def patch(self,request, pk ,format=None):
        try:
            category = Category.objects.get(pk=pk)
        except Category.DoesNotExist as exp:
            return Response({'success':False,'message':'Requested resource does not found.'},status=status.HTTP_204_NO_CONTENT)
        
        serializer = CategorySerializer(category,request.data,partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({'success':True,'message':'category is updated.','data':serializer.data},status=status.HTTP_200_OK)
        

    def delete(self,request,pk,format=None):
        try:
            category = Category.objects.get(pk=pk)
        except Category.DoesNotExist as exp:
            return Response({'success':False,'message':'Requested resource does not found.'},status=status.HTTP_204_NO_CONTENT)
        category.delete()
        return Response({'success':True,'message':'category deleted successfully.'},status=status.HTTP_200_OK)


class ProductListAPI(APIView):
    permission_classes = [ReadOnlyOrIsAdminUser,]

    def get(self, request):
        product = Product.objects.all()
        serializer = ProductSerializer(product, many=True)
        return Response({'success':True,'message':'list of available products.','data':serializer.data},status=status.HTTP_200_OK)
    
    def post(self,request, format=None):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({'success':True,'message':'new product created','data':serializer.data}, status= status.HTTP_201_CREATED)



class ProductDetailAPI(APIView):
    permission_classes = [ReadOnlyOrIsAdminUser,]
    
    def get(self,request,pk,format=None):
        try:
            product = Product.objects.get(pk=pk)
        except Product.DoesNotExist as exp:
            return Response({'success':False,'message':'Requested resource does not found.'},status=status.HTTP_204_NO_CONTENT)
        
        serializer = ProductSerializer(product)
        return Response({'success':True,'data':serializer.data},status=status.HTTP_200_OK)
    
    def put(self, request, pk, format=None):
        try:
            product = Product.objects.get(pk=pk)
        except Product.DoesNotExist as exp:
            return Response({'success':False,'message':'Requested resource does not found.'},status=status.HTTP_204_NO_CONTENT)
        
        serializer = ProductSerializer(product,request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({'success':True,'message':'product is updated.','data':serializer.data},status=status.HTTP_200_OK)
        
    
    def patch(self,request, pk ,format=None):
        try:
            product = Product.objects.get(pk=pk)
        except Product.DoesNotExist as exp:
            return Response({'success':False,'message':'Requested resource does not found.'},status=status.HTTP_204_NO_CONTENT)
        
        serializer = ProductSerializer(product,request.data,partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({'success':True,'message':'product is updated.','data':serializer.data},status=status.HTTP_200_OK)
        

    def delete(self,request,pk,format=None):
        try:
            product = Product.objects.get(pk=pk)
        except Product.DoesNotExist as exp:
            return Response({'success':False,'message':'Requested resource does not found.'},status=status.HTTP_204_NO_CONTENT)
        product.delete()
        return Response({'success':True,'message':'product deleted successfully.'},status=status.HTTP_200_OK)


