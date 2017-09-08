# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0003_detailinfo'),
    ]

    operations = [
        migrations.AddField(
            model_name='detailinfo',
            name='headpic_url',
            field=models.URLField(blank=True),
        ),
        migrations.AlterField(
            model_name='detailinfo',
            name='address',
            field=models.CharField(max_length=255, blank=True),
        ),
        migrations.AlterField(
            model_name='detailinfo',
            name='gender',
            field=models.CharField(max_length=10, blank=True),
        ),
        migrations.AlterField(
            model_name='detailinfo',
            name='name',
            field=models.CharField(max_length=255, blank=True),
        ),
        migrations.AlterField(
            model_name='detailinfo',
            name='school',
            field=models.CharField(max_length=255, blank=True),
        ),
    ]
