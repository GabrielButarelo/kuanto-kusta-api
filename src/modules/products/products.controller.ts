import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateProductDto } from './dtos/createProduct.dto';
import { ApiHeader, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
@ApiHeader({
  name: 'userid',
  example: '101010',
})
export class ProductsController {
  constructor(
    @Inject('PRODUCTS_COMMUNICATION')
    private readonly communicationClient: ClientProxy,
  ) {}

  @Post('create-product')
  @ApiResponse({
    status: 201,
    description: 'Create new product',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  createProduct(@Body() data: CreateProductDto) {
    return this.communicationClient.send('create_product', data);
  }

  @Get('list-all-products')
  @ApiResponse({
    status: 200,
    description: 'List all products in shopping cart',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  listAllProducts() {
    return this.communicationClient.send('list_all_products', {});
  }
}
