import { IsNumber, IsString, Min, MinLength } from 'class-validator';
import { products } from '../contracts/products';

export class CreateDto implements products.AddOneProductRequest {
  @IsString()
  @MinLength(5)
  description: string;

  @IsString()
  @MinLength(5)
  name: string;

  @IsNumber()
  @Min(1)
  price: number;
}
