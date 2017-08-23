# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
#

class Pictures(models.Model):
    pic_name = models.CharField(max_length=64)
    pic_url = models.URLField()
    add_time = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.pic_name

class Accounts(models.Model):
    username = models.CharField(max_length=11)
    password = models.CharField(max_length=16)
    nickname = models.CharField(max_length=16)
    register_time = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.username

class Comments(models.Model):
    user = models.CharField(max_length=16)
    comment = models.CharField(max_length=255)
    comment_time = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.user
