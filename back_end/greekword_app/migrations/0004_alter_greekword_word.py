# Generated by Django 5.0 on 2023-12-17 23:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('greekword_app', '0003_alter_greekword_word'),
    ]

    operations = [
        migrations.AlterField(
            model_name='greekword',
            name='word',
            field=models.CharField(max_length=100),
        ),
    ]
