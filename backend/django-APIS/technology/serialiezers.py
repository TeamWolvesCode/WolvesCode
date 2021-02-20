from rest_framework import serializers
from .models import Technology


class TechnologySerializers(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ('pk', 'name', 'icon')