from django.shortcuts import render
from rest_framework import viewsets
from .models import Snippet
from .serializer import SnippetSerializer


class SnippetViewSet(viewsets.ModelViewSet):
    """ api for serving snippets """

    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer
