from django.urls import include, path
from rest_framework import routers
from . import views

urlpatterns = [
    path('document', views.Documents.as_view()),
    path(r'site/<int:siteId>/documents', views.SiteDocuments.as_view())
]
