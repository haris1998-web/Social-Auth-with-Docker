from rest_framework.views import APIView
from rest_framework import serializers
from rest_framework.response import Response
from social_django.utils import load_backend, load_strategy
from django.conf import settings

class GoogleLogin(APIView):
    class GoogleAuthSerializer(serializers.Serializer):
        access_token = serializers.CharField()

    def post(self, request, *args, **kwargs):
        print('Here')
        serializer = self.GoogleAuthSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        data = serializer.validated_data
        access_token = data.get('access_token','')

        strategy = load_strategy(access_token)
        backend = load_backend(strategy, 'google-oauth2', redirect_uri=settings.SOCIAL_AUTH_REDIRECT_URI)

        return Response({'access_token': access_token})

        

