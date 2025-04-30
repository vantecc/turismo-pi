from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TouristPointViewSet
from rest_framework.authtoken.views import obtain_auth_token
from .views import RegisterView
from .views import EmailLoginView

router = DefaultRouter()
router.register(r'tourist-points', TouristPointViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', obtain_auth_token),
    path('register/', RegisterView.as_view()),
    path('email-login/', EmailLoginView.as_view()),
]
