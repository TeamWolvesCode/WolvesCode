from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import TeamMember, Position


class CustomUserAdmin(UserAdmin):
    fieldsets = (
        *UserAdmin.fieldsets,  # original form fieldsets, expanded
        (
            'Background',  # group heading of your choice; set to None for a blank space instead of a header
            {
                'fields': (
                    'technologies',
                    'description',
                    'position',
                    'picture',
                ),
            },
        ),
    )


admin.site.register(TeamMember, CustomUserAdmin)
admin.site.register(Position)