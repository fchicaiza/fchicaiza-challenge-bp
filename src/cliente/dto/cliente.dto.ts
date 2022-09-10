import { BaseDTO } from "../../config/base.dto";
import { IsNotEmpty } from "class-validator";

export class ClienteDTO extends BaseDTO {
  @IsNotEmpty()
  id_cliente!: number;
  @IsNotEmpty()
  contraseña!: string;
  @IsNotEmpty()
  estado!: string;
}
