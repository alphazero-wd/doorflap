import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { Category } from '../utils/category.enum';

export class CreateProductDto {
  @IsString()
  @Length(1, 64, { message: 'Title can only be between 1 and 64 characters' })
  title: string;

  @IsString()
  @IsOptional()
  desc?: string;

  @IsEnum(Category)
  category: Category;

  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;
}
