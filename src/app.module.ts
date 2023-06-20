import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { ShoppingCartModule } from './modules/shoppingCart/shoppingCart.module';

@Module({
  imports: [ProductsModule, ShoppingCartModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
