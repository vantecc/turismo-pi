from rest_framework.views import APIView
from rest_framework import viewsets
from .models import TouristPoint
from .serializers import TouristPointSerializer 
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from .serializers import RegisterSerializer

class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token, _ = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'user': {
                    'id': user.id,
                    'username' : user.username,
                    'email' : user.email
                }
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class TouristPointViewSet(viewsets.ModelViewSet):
    queryset = TouristPoint.objects.all()
    serializer_class = TouristPointSerializer

    from django.contrib.auth import authenticate
from django.contrib.auth.models import User

class EmailLoginView(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({"error": "Email não encontrado."}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(username=user.username, password=password)
        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({
                "token": token.key,
                "user": {
                    "id": user.id,
                    "username": user.username,
                    "email": user.email
                }
            })
        return Response({"error": "Senha inválida."}, status=status.HTTP_400_BAD_REQUEST)
