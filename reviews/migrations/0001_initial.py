# Generated by Django 3.2.9 on 2021-12-17 16:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('shop', '0003_product_rating_counter'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductReview',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.PositiveSmallIntegerField(choices=[(0, 0), (1, 1), (2, 2), (3, 3), (4, 4), (5, 5)], default=5)),
                ('review', models.TextField(max_length=500)),
                ('order_id', models.PositiveSmallIntegerField(editable=False, null=True)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product_review', to='shop.product')),
                ('user_profile', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='user_review', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]