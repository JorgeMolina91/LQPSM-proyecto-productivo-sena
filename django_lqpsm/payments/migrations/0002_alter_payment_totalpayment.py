# Generated by Django 4.2.3 on 2023-09-10 00:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('payments', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='payment',
            name='totalPayment',
            field=models.DecimalField(decimal_places=3, max_digits=10),
        ),
    ]