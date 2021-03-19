FROM python:3
WORKDIR /code
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/django-APIS .

EXPOSE 8000
CMD ["python", "manage.py", "runserver"]


