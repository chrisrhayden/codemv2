from django.shortcuts import render
from rest_framework import viewsets
from .serializer import AnnotationSerializer
from .models import Annotation


class AnnotationViewSet(viewsets.ModelViewSet):
    """ api for serving ano """

    queryset = Annotation.objects.all()
    serializer_class = AnnotationSerializer
