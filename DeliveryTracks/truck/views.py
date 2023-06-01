from rest_framework.viewsets import ModelViewSet
from .models import Cargo
from .serializer import CargoModelSerializer


class CargoModelViewSet(ModelViewSet):
    serializer_class = CargoModelSerializer
    queryset = Cargo.objects.all()
