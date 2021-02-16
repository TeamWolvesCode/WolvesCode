import os

commands = [
    'pip install virtualenv',
    'virtualenv venv',
    'source venv/bin/activate',
    'pip install -r requirements.txt',
    'cd backend/django-APIS',
    'python manage.py makemigrations',
    'python manage.py migrate',
    'python manage.py createsuperuser',
    'python manage.py runserver'
]

for command in commands:
    os.system(command)