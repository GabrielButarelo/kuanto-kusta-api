import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ShoppingCartController } from './shoppingCart.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthMiddleware } from '../auth/auth.middleware';

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
export class ShoppingCartModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('shopping-cart');
  }
}
