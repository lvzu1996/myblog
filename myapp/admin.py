# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.
from myapp import models

admin.site.register(models.Pictures)
admin.site.register(models.Accounts)
admin.site.register(models.Comments)


admin.site.register(models.TestModel)
admin.site.register(models.TestModel2)
