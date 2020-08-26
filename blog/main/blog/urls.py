from . import views
from django.urls import path
from django.views.generic import RedirectView


app_name="blogs"
urlpatterns = [
    path('', views.index, name="index"),
    path('<str:slug>/', views.blog_post, name="blog_post")
]