from rest_framework.permissions import BasePermission

class ReadOnlyOrIsAdminUser(BasePermission):
    """
        Custom permission to only allow admin users to make POST requests.
    """

    def has_permission(self, request, view):
        if  request.method in ('GET','HEAD','OPTIONS'):
            return True
        
        return request.method in ("POST","PUT","PATCH","DELETE") and request.user and request.user.is_staff