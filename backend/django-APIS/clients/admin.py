from django.contrib import admin
from .models import Client, Project


@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('name', 'business', 'email')
    search_fields = ('name__startswith',)
    icon_name = 'person'


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'client',  'score', 'is_development')
    search_fields = ('name__startswith',)
    list_filter = ('client', 'score', 'work_hours', 'projectsTechnologies', 'is_development')
    icon_name = 'card_travel'