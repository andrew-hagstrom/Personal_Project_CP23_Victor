# Generated by Django 5.0 on 2023-12-14 23:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bibletext_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='greek_word',
            name='morphology',
            field=models.TextField(default=None),
        ),
    ]
