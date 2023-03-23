from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('auth/', include('social_django.urls', namespace='social')),
    path('', include('home.urls')),
    path('admin/', admin.site.urls),
]
