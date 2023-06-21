import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AddProductInShoppingCartDto } from './dtos/addProductInShoppingCart.dto';
import { RemoveProductInShoppingCartDto } from './dtos/removeProductInShoppingCart.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller('shopping-cart')
export class ShoppingCartController {
  constructor(
    @Inject('SHOPPING_CART_COMMUNICATION')
    private readonly communicationClient: ClientProxy,
  ) {}

  @Post('add-product')
  addProductInShoppingCart(@Body() data: AddProductInShoppingCartDto) {
    return this.communicationClient.send('add_product_in_shopping_cart', data);
  }

  @Post('remove-product')
  removeProductInShoppingCart(@Body() data: RemoveProductInShoppingCartDto) {
    return this.communicationClient.send(
      'remove_product_in_shopping_cart',
      data,
    );
  }

  @Get('view')
  viewShoppingCart() {
    return {
      shoppingCartId: 192663,
      userId: 11111111,
      totalPrice: 267,
      totalQuantity: 1,
      products: [
        {
          productId: 192663,
          price: 267,
          quantity: 1,
        },
      ],
    };
  }
}
