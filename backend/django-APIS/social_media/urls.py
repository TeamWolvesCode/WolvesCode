""" Colors Urls """
# Django
from django.urls import path, include

# Django Rest Framework
from rest_framework.routers import DefaultRouter

# Views
from .views import SocialMediaViewSet

router = DefaultRouter()
router.register(r'social-media', SocialMediaViewSet, basename='social media')

urlpatterns = [
    path('', include(router.urls))
]
