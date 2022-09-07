import { IsDate, IsNumber, IsOptional } from "class-validator";

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
