# Generated by Django 3.1.6 on 2021-02-20 01:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0002_auto_20210218_0342'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='project',
            options={'verbose_name': 'Project', 'verbose_name_plural': 'Projects'},
        ),
    ]
