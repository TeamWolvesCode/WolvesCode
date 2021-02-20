from rest_framework import serializers
from .models import Client, Project
from technology.serialiezers import TechnologySerializers
from django.db.models import Sum, Avg


class ProjectSerializer(serializers.ModelSerializer):
    projectsTechnologies = TechnologySerializers(many=True)

    class Meta:
        model = Project
        fields = ('id', 'name', 'description', 'score', 'work_hours', 'projectsTechnologies')


class ClientSerializer(serializers.ModelSerializer):
    projects = ProjectSerializer(many=True)

    class Meta:
        model = Client
        fields = ('id', 'name', 'business', 'testimony', 'link', 'email', 'projects')


class StatsSerializers(serializers.ModelSerializer):
    total_hours = serializers.SerializerMethodField()
    total_jobs = serializers.SerializerMethodField()
    total_score = serializers.SerializerMethodField()
    total_clients = serializers.SerializerMethodField()

    class Meta:
        model = Client
        fields = ('total_hours',
                  'total_jobs',
                  'total_score',
                  'total_clients'
                  )

    def get_total_hours(self, obj):
        return sum([item.work_hours for item in obj])

    def get_total_score(self, obj):
        avg = obj.aggregate(Avg('score'))
        return avg['score__avg']

    def get_total_jobs(self, obj):
        count = obj.count()
        return count

    def get_total_clients(self, obj):
        count = []
        data = [item.client.id for item in obj]
        for item in data:
            if item not in count:
                count.append(item)
        return len(count)


