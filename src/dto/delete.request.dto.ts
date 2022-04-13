import { IsString, MinLength } from 'class-validator';
import { products } from '../contracts/products';

export class DeleteOneDto implements products.DeleteOneRequest {
  @IsString()
  @MinLength(10)
  id: string;
}
