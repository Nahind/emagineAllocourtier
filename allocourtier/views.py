from django.shortcuts import render
from django.http import HttpResponse
from allocourtier.models import Activity

def activityView(request):

    context = {
        'activities': Activity.objects.all()
    }
    return render(request, "allocourtier/index.html", context)


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")
