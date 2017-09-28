from rest_framework import serializers
from .models import Snippet, Language


class LanguageSerializer(serializers.ModelSerializer):
    """ to serve snippet serializer below """
    class Meta:
        model = Language
        fields = ('name', 'version', 'doc_url')


class SnippetSerializer(serializers.ModelSerializer):
    """
    serve both snip and language
    """

    lang = LanguageSerializer()

    class Meta:
        model = Snippet
        fields = ('title', 'author', 'code', 'lang')
