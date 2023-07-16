from django.contrib import admin
from . models import Coffee

# register Coffee to admin 
class CoffeeAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'quantity', 'image']
admin.site.register(Coffee, CoffeeAdmin)
