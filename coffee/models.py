from django.db import models

class Coffee(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    quantity= models.IntegerField()
    image = models.ImageField(upload_to='coffees/')
 

    def __str__(self):
        return self.name
