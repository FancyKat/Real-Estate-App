from rest_framework.generics import (ListCreateAPIView, RetrieveUpdateDestroyAPIView,)
from .models import Todo
from .permissions import IsOwnerOrReadOnly
from .serializers import TodoSerializer


from rest_framework import viewsets      


class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()


class TodoList(ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class TodoDetail(RetrieveUpdateDestroyAPIView):
    permission_classes = (IsOwnerOrReadOnly,)
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
