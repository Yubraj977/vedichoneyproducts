# CUSTOME GPT
from rest_framework.views import exception_handler
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ValidationError as DjangoValidationError
from rest_framework.exceptions import ValidationError as DRFValidationError, NotFound
from rest_framework.exceptions import APIException

def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)

    # Define your custom response structure
    custom_response = {
        'success': False,
        'status_code': None,
        'message': '',
        'errors': list()
    }

    if response is not None:
        # Update the custom response with data from the default response
        custom_response['status_code'] = response.status_code

        if isinstance(exc, NotFound):
            custom_response['message'] = 'Resource not found'
            custom_response['errors'] = response.data

        if isinstance(exc, (DRFValidationError, DjangoValidationError)):
            custom_response['message'] = 'Validation error'
            custom_response['errors'] = response.data
            
            # print(response.data)
            # for i in response.data:
            #     if response.data[i][0].code == "required":
            #         message = f"{i} is required"
            #         custom_response['errors'].append(message)

            #     if response.data[i][0].code == "unique":
            #         message = f"{i} should be unique"
            #         custom_response['errors'].append(message)


        else:
            custom_response['message'] = str(exc)
            if isinstance(response.data, list):
                custom_response['errors'] = response.data
            else:
                custom_response['errors'] = [response.data]
        response.data = custom_response
    else:
        # If the exception is not handled by the default handler
        custom_response['status_code'] = status.HTTP_500_INTERNAL_SERVER_ERROR
        custom_response['message'] = 'Internal server error'
        custom_response['errors'] = [str(exc)]
        response = Response(custom_response, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    return response
