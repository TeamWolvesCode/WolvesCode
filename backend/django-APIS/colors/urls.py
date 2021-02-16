""" Colors Urls """
# Django
from django.urls import path, include

# Django Rest Framework
from rest_framework.routers import DefaultRouter

# Views
from .views import ColorViewSet

router = DefaultRouter()
router.register(r'colors', ColorViewSet, basename='color')

urlpatterns = [
    path('', include(router.urls))
]
