# Generated by Django 3.1.6 on 2021-02-18 03:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('technology', '0002_auto_20210218_0152'),
        ('clients', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='technologies',
        ),
        migrations.AddField(
            model_name='project',
            name='projectsTechnologies',
            field=models.ManyToManyField(related_name='projectsTechnologies', to='technology.Technology'),
        ),
        migrations.AlterField(
            model_name='project',
            name='client',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='projects', to='clients.client'),
        ),
    ]