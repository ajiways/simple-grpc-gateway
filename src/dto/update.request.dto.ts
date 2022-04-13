import { Optional } from '@nestjs/common';
import { Type } from 'class-transformer';
import {
  IsNumber,
  IsObject,
  IsString,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { products } from '../contracts/products';

export class UpdateOneDto implements products.UpdateOneRequest {
  @IsString()
  @MinLength(10)
  id: string;

  @IsObject()
  @ValidateNested()
  @Type(() => UpdateOneBody)
  body: products.UpdateOneBody;
}

class UpdateOneBody implements products.UpdateOneBody {
  @IsString()
  @Optional()
  @MinLength(5)
  newdesription?: string;

  @IsString()
  @Optional()
  @MinLength(5)
  newname?: string;

  @IsNumber()
  @Optional()
  @Min(1)
  newprice?: number;
}
