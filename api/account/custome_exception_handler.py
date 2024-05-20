from rest_framework.views import exception_handler

def custome_exception_handler(exc, context):
    response= exception_handler(exc, context)
    if response is not None:
        data = {
            "errors":{**exc},
        }
        response.data = data
    return response 