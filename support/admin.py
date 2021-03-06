"""
    1. Admin Support messages fields
    1. Admin customer Support fields
"""
from django.contrib import admin
from .models import CustomerSuport, Message


class MesageSuportAdmin(admin.TabularInline):
    """Admin Support messages fields"""
    model = Message

    fields = ('user', 'thread', 'message')


class CustomerSuportAdmin(admin.ModelAdmin):
    """
    Admin customer Support fields
    Included Admin messages fields
    """
    inlines = (MesageSuportAdmin,)

    readonly_fields = ('user_profile', 'issue', 'message',
                       'order_line', 'order', 'date')

    fields = ('status', 'user_profile', 'order',
              'order_line', 'issue', 'message', 'date')

    list_display = ('issue', 'user_profile', 'order',
                    'order_line', 'date', 'status')

    ordering = ('-date',)


admin.site.register(CustomerSuport, CustomerSuportAdmin)
