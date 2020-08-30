from django.shortcuts import render
from .models import Quiz, Story

def Exam(request):
  story = Story.objects.all()
  questions = Quiz.objects.all()
  return render(request,'index.html',{'stories': story, 'questions':questions})
