from rest_framework import serializers
from .models import TeamMember, Position
from technology.serialiezers import TechnologySerializers


class PositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Position
        fields = "__all__"


class TeamMemberSerializer(serializers.ModelSerializer):
    position = PositionSerializer(many=True)
    technologies = TechnologySerializers(many=True)

    class Meta:
        model = TeamMember
        fields = ('pk', 'first_name', 'last_name', 'position', 'technologies', 'description', 'picture')