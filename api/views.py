from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from django.forms.models import model_to_dict


class UserLogin(APIView):
	permission_classes = (permissions.IsAuthenticated,)
	lookup_field = 'username'

	def post(self, request, format=None):
		user_instance = User.objects.get(username=request.data.get('username'))
		user_instance = model_to_dict(user_instance)
		user_instance.pop("password")
		return Response(user_instance)