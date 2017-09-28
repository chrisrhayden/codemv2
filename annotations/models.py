from django.db import models
from django.contrib.auth.models import User
from snippets.models import Snippet


class Annotation(models.Model):
    """
    author
    created
    snippet = foreinkey
    code = the code thats annotating a snnipet
    line_begin
    line_end
    """

    author = models.ForeignKey(User, blank=True, null=True)
    created = models.TimeField(auto_now_add=True)
    snippet = models.ForeignKey(Snippet)
    code = models.TextField()
    line_begin = models.PositiveSmallIntegerField()
    line_end = models.PositiveSmallIntegerField()

    def __str__(self):
        return f'snip to ano: {self.snippet.title}'
