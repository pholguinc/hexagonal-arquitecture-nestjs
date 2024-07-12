
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CategoryDto {
  @IsOptional()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  status: number;

  @IsOptional()
  @ApiProperty()
  createdAt: Date;

  @IsOptional()
  @ApiProperty()
  updatedAt?: Date;
}


