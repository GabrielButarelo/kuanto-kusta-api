import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('list-all-products')
  listAllProducts() {
    return {
      products: [
        {
          productId: '192663',
          price: 267,
        },
        {
          productId: '192664',
          price: 220,
        },
        {
          productId: '192665',
          price: 2617,
        },
      ],
    };
  }
}
