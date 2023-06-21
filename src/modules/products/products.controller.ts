import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateProductDto } from './dtos/createProduct.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(
    @Inject('PRODUCTS_COMMUNICATION')
    private readonly communicationClient: ClientProxy,
  ) {}

  @Post('create-product')
  createProduct(@Body() data: CreateProductDto) {
    return this.communicationClient.send('create_product', data);
  }

  @Get('list-all-products')
  listAllProducts() {
    return this.communicationClient.send('list_all_products', {});
  }
}
