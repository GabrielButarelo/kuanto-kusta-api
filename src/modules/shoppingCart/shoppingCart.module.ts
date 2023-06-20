import { Module } from '@nestjs/common';
import { ShoppingCartController } from './shoppingCart.controller';

@Module({
  imports: [],
  controllers: [ShoppingCartController],
  providers: [],
})
export class ShoppingCartModule {}
