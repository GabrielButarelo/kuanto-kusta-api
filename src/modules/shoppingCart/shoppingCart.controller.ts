import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddProductInShoppingCartDto } from './dtos/addProductInShoppingCart.dto';
import { RemoveProductInShoppingCartDto } from './dtos/removeProductInShoppingCart.dto';

@Controller('shopping-cart')
export class ShoppingCartController {
  @Post('add-product')
  addProductInShoppingCart(@Body() body: AddProductInShoppingCartDto) {
    return {
      ...body,
    };
  }

  @Post('remove-product')
  removeProductInShoppingCart(@Body() body: RemoveProductInShoppingCartDto) {
    return {
      ...body,
    };
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
