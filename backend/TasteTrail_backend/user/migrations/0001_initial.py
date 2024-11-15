# Generated by Django 5.1.3 on 2024-11-13 19:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fullName', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('imageUrl', models.URLField(max_length=1000)),
            ],
        ),
    ]
