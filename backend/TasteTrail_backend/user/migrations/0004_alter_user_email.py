# Generated by Django 5.1.3 on 2024-11-14 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_remove_user_id_alter_user_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.CharField(max_length=100, primary_key=True, serialize=False, unique=True),
        ),
    ]
