import { Module } from '@nestjs/common';
import { ShoppingCartController } from './shoppingCart.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SHOPPING_CART_COMMUNICATION',
        transport: Transport.TCP,
      },
    ]),
  ],
  controllers: [ShoppingCartController],
  providers: [],
})
export class ShoppingCartModule {}
