from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt import views as jwt_views
from rest_framework import routers                 
from todo import views                             

router = routers.DefaultRouter()                   
router.register(r'todos', views.TodoView, 'todo')


urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/', include(router.urls)),             
    path("api/v1/todo/", include("todo.urls")),
    path("api-auth/", include("rest_framework.urls")),
    path(
        "api/token/",
        jwt_views.TokenObtainPairView.as_view(),
        name="token_obtain_pair",
    ),
    path(
        "api/token/refresh",
        jwt_views.TokenRefreshView.as_view(),
        name="token_refresh",
    ),
]
