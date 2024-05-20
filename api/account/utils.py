from django.conf import settings
from django.core.mail import send_mail

def send_password_reset_mail(name,email,reset_url):
    subject = f'Password Reset Link'
    message = f'Dear {name},\n Click on the link to reset your password. \n {reset_url}'
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email, ]
    send_mail( subject, message, email_from, recipient_list )


def send_password_reset_successfull_mail(name,email):
    ...


def send_password_changed_mail(name,email):
    ...


def send_account_activation_mail(email, activation_link):
    ...


