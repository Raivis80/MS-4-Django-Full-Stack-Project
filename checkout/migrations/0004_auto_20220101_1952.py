# Generated by Django 3.2.9 on 2022-01-01 19:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('checkout', '0003_order_unpaid'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='unpaid',
        ),
        migrations.AddField(
            model_name='order',
            name='paid',
            field=models.BooleanField(default=False),
        ),
    ]
