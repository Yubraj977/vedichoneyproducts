class AuthorizationMiddleware:
    def __init__(self, get_response=None):
        self.get_response = get_response

    def __call__(self, request):
        view_func = self.get_view_func(request)

        if view_func and hasattr(view_func, 'view_class') and  getattr(view_func.view_class,'skip_auth_middleware', False):
            return self.get_response(request)

        token = request.COOKIES.get('access_token')
        if token is None or token == "":
            return self.get_response(request)
        if token:
                request.META['HTTP_AUTHORIZATION'] = f'Bearer {token}'
        return self.get_response(request)
    

    def get_view_func(self, request):
        """
        Resolve the view function from the request.
        This requires accessing the URL resolver, which isn't straightforward.
        """
        from django.urls import resolve
        try:
            match = resolve(request.path_info)
            return match.func
        except Exception:
            return None