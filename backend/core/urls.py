from django.contrib import admin
from django.urls import include, path
from rest_framework.authtoken.views import obtain_auth_token
from meupiaui.views import EmailLoginView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('meupiaui.urls')),
    path('api/token-auth/', obtain_auth_token),
    path('email-login', EmailLoginView.as_view()),
]

