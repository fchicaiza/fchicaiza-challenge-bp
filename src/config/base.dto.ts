import { IsDate, IsOptional, IsNumber } from "class-validator";

export class BaseDTO {
  @IsNumber()
  @IsOptional()
  id!: string;

  @IsDate()
  @IsOptional()
  createdAt!: Date;

  @IsDate()
  @IsOptional()
  updatedAt!: Date;
}
