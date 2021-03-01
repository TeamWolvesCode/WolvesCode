from rest_framework.response import Response
from rest_framework import viewsets

from .models import Client, Project
from .serializers import ClientSerializer, StatsSerializers


class ClientViewSet(viewsets.ViewSet):
    """
            A simple ViewSet for listing TeamMembers
    """

    def list(self, request):
        queryset = Client.objects.all()
        serializers = ClientSerializer(queryset, many=True)
        return Response(serializers.data)


class StatsViewSet(viewsets.ReadOnlyModelViewSet):
    """
                A simple ViewSet for listing Stats
        """
    def list(self, request):
        queryset = Project.objects.filter(is_development=False)
        serializers = StatsSerializers(queryset)
        return Response(serializers.data)
