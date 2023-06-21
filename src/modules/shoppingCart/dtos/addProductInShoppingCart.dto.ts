import { IsNotEmpty } from 'class-validator';
import { IAddProductInShoppingCart } from '../interfaces/addProductInShoppingCart.interface';
import { ApiProperty } from '@nestjs/swagger';

export class AddProductInShoppingCartDto implements IAddProductInShoppingCart {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Put the id of a product',
    example: '1023',
    type: String,
  })
  productId: string;

  @ApiProperty({
    description:
      'Define the quantity of this product that you want to put in the shopping cart',
    example: '1',
    type: Number,
  })
  @IsNotEmpty()
  quantity: number;

  @ApiProperty({
    description:
      'Set the price of the product you want to put in the shopping cart',
    example: '100',
    type: Number,
  })
  @IsNotEmpty()
  price: number;
}
