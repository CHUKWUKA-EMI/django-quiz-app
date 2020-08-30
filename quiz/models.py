from django.db import models

class Story(models.Model):
  name = models.CharField(max_length=100)
  content= models.TextField(max_length=500)
  class Meta:
    db_table = "story"
    verbose_name = "Story"
    verbose_name_plural = "Stories"

class Quiz(models.Model):
  story=models.ForeignKey(Story,on_delete=models.CASCADE,related_name='Story')
  question = models.CharField(max_length=100)
  option1=models.CharField(max_length=100)
  option2=models.CharField(max_length=100)
  option3=models.CharField(max_length=100)
  option4=models.CharField(max_length=100)
  duration=models.IntegerField(default=60)
  correct_answer=models.CharField(max_length=100)
  class Meta:
    db_table ="quiz"
    verbose_name_plural = "Questions"
    ordering=['id']

