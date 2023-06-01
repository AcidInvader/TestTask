from .models import Cargo, Truck, Location
from rest_framework.serializers import ModelSerializer


class  CargoModelSerializer(ModelSerializer):
    class Meta:
        model = Cargo
        fields = "__all__"