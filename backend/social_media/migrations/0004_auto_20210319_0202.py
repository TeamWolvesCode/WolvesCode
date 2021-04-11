# Generated by Django 3.1.6 on 2021-03-19 02:02

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('social_media', '0003_auto_20210306_1706'),
    ]

    operations = [
        migrations.AlterField(
            model_name='socialmedia',
            name='icon',
            field=models.FileField(upload_to='social_media/', validators=[django.core.validators.FileExtensionValidator(['png', 'jpg', 'svg'])]),
        ),
    ]