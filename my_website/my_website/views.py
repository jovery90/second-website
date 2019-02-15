from django.core.urlresolvers import reverse
from django.http import HttpResponseRedirect
from django.views.generic import TemplateView

class GamePage(TemplateView):
    template_name = 'game.html'

class ProjectsPage(TemplateView):
    template_name = 'projects.html'

class AboutPage(TemplateView):
    template_name = 'about.html'

class HomePage(TemplateView):
    template_name = "index4.html"
