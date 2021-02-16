""" Main URLS module."""
# from django.conf import settings
from django.urls import include, path
from django.contrib import admin
# from django.conf.urls.static import static

urlpatterns = [
    # Django Admin
    path('admin/', admin.site.urls),

    path('api/v1/', include(('colors.urls', 'colors'), namespace='colors')),
    path('api/v1/', include(('social_media.urls', 'social media'), namespace='social-media')),
]
