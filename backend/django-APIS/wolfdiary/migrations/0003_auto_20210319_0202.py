# Generated by Django 3.1.6 on 2021-03-19 02:02

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wolfdiary', '0002_auto_20210306_1706'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wolfpage',
            name='image',
            field=models.FileField(upload_to='wolf-diary', validators=[django.core.validators.FileExtensionValidator(['png', 'jpg', 'svg'])]),
        ),
    ]