import { IsNotEmpty } from 'class-validator';
import { IRemoveProductInShoppingCart } from '../interfaces/removeProductInShoppingCart.interface';
import { ApiProperty } from '@nestjs/swagger';

export class RemoveProductInShoppingCartDto
  implements IRemoveProductInShoppingCart
{
  @IsNotEmpty()
  @ApiProperty({
    description: 'Put the id of a product',
    example: '1023',
    type: String,
  })
  productId: string;

  @ApiProperty({
    description:
      'Define the quantity of this product that you want to remove in the shopping cart',
    example: '1',
    type: Number,
  })
  @IsNotEmpty()
  quantity: number;

  @ApiProperty({
    description:
      'Set the price of the product you want to remove in the shopping cart',
    example: '100',
    type: Number,
  })
  @IsNotEmpty()
  price: number;
}
