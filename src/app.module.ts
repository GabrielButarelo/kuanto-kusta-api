import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { ShoppingCartModule } from './modules/shoppingCart/shoppingCart.module';
import { SwaggerModule } from '@nestjs/swagger';

@Module({
  imports: [ProductsModule, ShoppingCartModule, SwaggerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
