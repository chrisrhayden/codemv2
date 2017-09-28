from django.shortcuts import render


def base_view(request):
    """ for the base template/html page """

    return render(request, 'base.html')
