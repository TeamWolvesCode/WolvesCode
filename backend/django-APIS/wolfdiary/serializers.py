from rest_framework import serializers
from .models import WolfPage
from clients.serializers import ProjectSerializer


class WolfDiarySerializer(serializers.ModelSerializer):
    # project = ProjectSerializer()

    class Meta:
        model = WolfPage
        # fields = ("id", "title", "content", "image", "project")
        fields = ("id", "title", "image")


class WolfPageSerializer(serializers.ModelSerializer):
    project = ProjectSerializer()

    class Meta:
        model = WolfPage
        fields = ("id", "title", "content", "image", "project")