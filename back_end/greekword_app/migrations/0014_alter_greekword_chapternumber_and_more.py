# Generated by Django 5.0 on 2024-01-22 06:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('greekword_app', '0013_alter_greekword_chapternumber_alter_greekword_bookid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='greekword',
            name='ChapterNumber',
            field=models.CharField(default='1', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='greekword',
            name='VerseNumber',
            field=models.CharField(default='1', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='greekword',
            name='bookId',
            field=models.CharField(default='Book', max_length=100, null=True),
        ),
    ]
