import { BaseDTO } from "../../config/base.dto";
import { IsNotEmpty } from "class-validator";

export class CuentaDTO extends BaseDTO {
  @IsNotEmpty()
  id_cuenta!: number;
  @IsNotEmpty()
  numeroCuenta!: number;
  @IsNotEmpty()
  tipoCuenta!: string;
  @IsNotEmpty()
  saldoInicial!: number;
  @IsNotEmpty()
  estado!: number;
}
