from rest_framework import serializers
from core.models import Cart
from product.models import Product
from product.serializers import ProductSerializer

class CartSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    class Meta:
        model = Cart
        fields = '__all__'

class CartPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'
        extra_kwargs = {
            'user': {'read_only':True},
        }

    def validate(self, attrs):
        quantity = attrs.get('quantity')
        product_id = attrs.get('product',self.context.get('product')).id
        try:
            product_obj = Product.objects.get(pk=product_id)
        except Product.DoesNotExist:
            raise serializers.ValidationError('Product does not exist.')
        stock_quantity = product_obj.stock_quantity
        if quantity > stock_quantity:
            raise serializers.ValidationError('Cart quantity is greater than stock quantity')
        return super().validate(attrs)

    def create(self, validated_data):
        user = self.context.get('user')
        validated_data.setdefault('user',user)
        new_item = Cart.objects.create(**validated_data)
        return new_item