from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from .models import Post

def index(request):
    blogs = Post.objects.all()
    context = {'blogs': blogs}
    return render(request, 'blog/index.html', context=context)

def blog_post(request, slug):
    post = get_object_or_404(Post, slug=slug)
    context = {'post': post}
    return render(request, 'blog/post.html', context=context)