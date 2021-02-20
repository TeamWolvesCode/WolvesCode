from django.db import models
from technology.models import Technology


class Client(models.Model):
    name = models.CharField(max_length=30)
    business = models.CharField(max_length=30, blank=True)
    testimony = models.TextField(blank=True)
    link = models.URLField(blank=True)
    email = models.EmailField()

    class Meta:
        verbose_name = "Client"
        verbose_name_plural = "Clients"

    def __str__(self):
        return self.name


class Project(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()
    score = models.FloatField()
    work_hours = models.FloatField()
    projectsTechnologies = models.ManyToManyField(Technology, related_name='projectsTechnologies')
    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='projects')
    is_development = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Project"
        verbose_name_plural = "Projects"

    def __str__(self):
        return self.name