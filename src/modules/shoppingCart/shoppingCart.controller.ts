import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AddProductInShoppingCartDto } from './dtos/addProductInShoppingCart.dto';
import { RemoveProductInShoppingCartDto } from './dtos/removeProductInShoppingCart.dto';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('shopping-cart')
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
    return this.communicationClient.send('view', {});
  }
}
