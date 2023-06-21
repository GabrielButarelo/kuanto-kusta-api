import { IsNotEmpty } from 'class-validator';
import { ICreateProduct } from '../interfaces/createProduct.interface';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto implements ICreateProduct {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Set an id for the new product that will be created',
    example: '1023',
    type: String,
  })
  productId: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Set the product price',
    example: 100,
    type: Number,
  })
  price: number;
}
