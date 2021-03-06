from django.db import models
from clients.models import Project


class WolfPage(models.Model):
    title = models.CharField(max_length=30)
    content = models.TextField()
    image = models.ImageField(upload_to="wolf-diary")
    project = models.OneToOneField(Project, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "WolfPage"
        verbose_name_plural = "WolfPages"

    def __str__(self):
        return self.title
