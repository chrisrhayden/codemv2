from django.db import models
from django.contrib.auth.models import User


class Language(models.Model):
    """
    the snip lang or snip tags

    I.E. Python3.6, ECMA 6, etc
    """

    name = models.CharField(max_length=100)
    version = models.CharField(max_length=100)
    doc_url = models.URLField()

    def __str__(self):
        return f'lang: {self.name}, ver: {self.version}'

    class Meta:
        unique_together = ['name', 'version']


class Snippet(models.Model):
    """ the snip people post """

    title = models.CharField(max_length=200)
    author = models.ForeignKey(User, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    code = models.TextField()
    lang = models.ForeignKey(Language)

    def __str__(self):
        return self.title
