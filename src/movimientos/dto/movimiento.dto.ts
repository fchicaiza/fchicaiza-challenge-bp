import { BaseDTO } from "../../config/base.dto";
import { IsNotEmpty } from "class-validator";

export class MovimientosDTO extends BaseDTO {
  @IsNotEmpty()
  id_movimiento!: number;
  @IsNotEmpty()
  fecha!: string;
  @IsNotEmpty()
  tipo_movimiento!: string;
  @IsNotEmpty()
  valor!: number;
  @IsNotEmpty()
  saldo!: number;
  @IsNotEmpty()
  id_cliente!: number;
}
