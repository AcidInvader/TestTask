from django.db import models

class Cargo(models.Model):
    pick_up = models.CharField(max_length=64)
    delivery = models.CharField(max_length=64)
    weight = models.PositiveIntegerField()

class Truck(models.Model):
    car_id = models.CharField(max_length=5)
    current_location = models.CharField(max_length=64)
    payload = models.PositiveIntegerField()

class Location(models.Model):
    city = models.CharField(max_length=32)
    state = models.CharField(max_length=32)
    zip_code = models.PositiveIntegerField()
    latitude = models.FloatField(verbose_name='широта')
    longitude = models.FloatField(verbose_name='долгота')
    


