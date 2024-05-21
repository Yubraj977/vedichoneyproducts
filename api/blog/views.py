from django.shortcuts import render
from rest_framework.views import APIView
from blog.models import Blog
from blog.serializers import BlogSerializer
from rest_framework import status
from rest_framework.response import Response
from blog.permissions import ReadOnlyOrIsAdminUser

# Create your views here.
class BlogListAPI(APIView):
    permission_classes = [ReadOnlyOrIsAdminUser]
    def get(self,rquest,format=None):
        blogs = Blog.objects.all()
        serializer = BlogSerializer(blogs,many=True)
        return Response(serializer.data, status = status.HTTP_200_OK)

    def post(self,request, format=None):
        serializer = BlogSerializer(data=request.data,context={'user':request.user})
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({'success':True,'message':'new blog created','data':serializer.data}, status= status.HTTP_201_CREATED)


class BlogDetailAPI(APIView):
    permission_classes = [ReadOnlyOrIsAdminUser]
    def get(self,request,pk,format=None):
        try:
            blog = Blog.objects.get(pk=pk)
        except Blog.DoesNotExist as exp:
            return Response({'success':False,'message':'Requested resource does not found.'},status=status.HTTP_204_NO_CONTENT)
        
        serializer = BlogSerializer(blog)
        return Response({'success':True,'data':serializer.data},status=status.HTTP_200_OK)
    
    def put(self, request, pk, format=None):
        try:
            blog = Blog.objects.get(pk=pk)
        except Blog.DoesNotExist as exp:
            return Response({'success':False,'message':'Requested resource does not found.'},status=status.HTTP_204_NO_CONTENT)
        
        serializer = BlogSerializer(blog,request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({'success':True,'message':'blog is updated.','data':serializer.data},status=status.HTTP_200_OK)
        
    
    def patch(self,request, pk ,format=None):
        try:
            blog = Blog.objects.get(pk=pk)
        except Blog.DoesNotExist as exp:
            return Response({'success':False,'message':'Requested resource does not found.'},status=status.HTTP_204_NO_CONTENT)
        
        serializer = BlogSerializer(blog,request.data,partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({'success':True,'message':'blog is updated.','data':serializer.data},status=status.HTTP_200_OK)
        

    def delete(self,request,pk,format=None):
        try:
            blog = Blog.objects.get(pk=pk)
        except Blog.DoesNotExist as exp:
            return Response({'success':False,'message':'Requested resource does not found.'},status=status.HTTP_204_NO_CONTENT)
        blog.delete()
        return Response({'success':True,'message':'blog deleted successfully.'},status=status.HTTP_200_OK)