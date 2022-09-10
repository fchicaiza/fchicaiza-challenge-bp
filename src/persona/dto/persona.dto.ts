import { BaseDTO } from "../../config/base.dto";
import { IsNotEmpty } from "class-validator";

export class PersonaDTO extends BaseDTO {
  @IsNotEmpty()
  id_persona!: number;
  @IsNotEmpty()
  nombre!: string;
  @IsNotEmpty()
  genero!: string;
  @IsNotEmpty()
  edad!: number;
  @IsNotEmpty()
  identificacion!: string;
  @IsNotEmpty()
  direccion!: string;
  @IsNotEmpty()
  telefono!: string;
}
