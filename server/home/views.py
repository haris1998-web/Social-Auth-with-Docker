from rest_framework.views import APIView
from django.http import JsonResponse

# Create your views here.
class Home(APIView):
    def get(self, request, format=None):
        return JsonResponse({'message': 'Hello World!'})
