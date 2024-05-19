from django.http import HttpResponse

EXCLUDE_FROM_MIDDLEWARE = [ 'account.views.UserRegisterationAPIView',
                             'account.views.UserLoginAPIView',
                             'account.views.UserRegisterationGoogleAPIView',
                             ]


class AuthorizationMiddleware:
    def __init__(self, get_response=None):
        self.get_response = get_response

    def process_view(self, request, view_func, view_args, view_kwargs):
        view_name = '.'.join((view_func.__module__, view_func.__name__))
        print(view_name)
        if view_name in EXCLUDE_FROM_MIDDLEWARE:
            return None
    
    def __call__(self, request):
        token = request.COOKIES.get('access_token')
        if token:
            request.META['HTTP_AUTHORIZATION'] = f'Bearer {token}'
        return self.get_response(request)