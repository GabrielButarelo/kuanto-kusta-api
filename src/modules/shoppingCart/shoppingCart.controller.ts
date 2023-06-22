import { Body, Controller, Get, Inject, Post, Headers } from '@nestjs/common';
import { AddProductInShoppingCartDto } from './dtos/addProductInShoppingCart.dto';
import { RemoveProductInShoppingCartDto } from './dtos/removeProductInShoppingCart.dto';
import { ClientProxy } from '@nestjs/microservices';
import { ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('shopping-cart')
@Controller('shopping-cart')
@ApiHeader({
  name: 'userid',
  example: '101010',
})
export class ShoppingCartController {
  constructor(
    @Inject('SHOPPING_CART_COMMUNICATION')
    private readonly communicationClient: ClientProxy,
  ) {}

  @Post('add-product')
  @ApiResponse({
    status: 201,
    description: 'Added product in shopping cart',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  addProductInShoppingCart(
    @Headers() headers,
    @Body() data: AddProductInShoppingCartDto,
  ) {
    return this.communicationClient.send('add_product_in_shopping_cart', {
      userId: headers.userid,
      product: {
        ...data,
      },
    });
  }

  @Post('remove-product')
  @ApiResponse({
    status: 201,
    description: 'Remove product in shopping cart',
  })
  @ApiResponse({
    status: 400,
    description:
      'The quantity of the product requested for removal is greater than the quantity of the product in the shopping cart',
  })
  @ApiResponse({
    status: 400,
    description: 'Not found shopping cart for this user id',
  })
  @ApiResponse({
    status: 400,
    description: 'Not found product id in the shopping cart for this user id',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  removeProductInShoppingCart(
    @Headers() headers,
    @Body() data: RemoveProductInShoppingCartDto,
  ) {
    return this.communicationClient.send('remove_product_in_shopping_cart', {
      userId: headers.userid,
      product: {
        ...data,
      },
    });
  }

  @Get('view')
  @ApiResponse({
    status: 201,
    description: 'List products in shopping cart',
  })
  @ApiResponse({
    status: 400,
    description: 'Not exist shopping cart from this user id',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  viewShoppingCart(@Headers() headers) {
    return this.communicationClient.send('view_shopping_cart', {
      userId: headers.userid,
    });
  }
}
