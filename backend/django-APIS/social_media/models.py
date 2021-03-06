from django.db import models


class SocialMedia(models.Model):
    name = models.CharField(max_length=15)
    url = models.URLField()
    icon = models.ImageField(upload_to='social_media/')

    class Meta:
        verbose_name = "Social Media"
        verbose_name_plural = "Social Medias"

    def __str__(self):
        return self.name
