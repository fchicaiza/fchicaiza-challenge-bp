import { BaseDTO } from "../../config/base.dto";
import { IsNotEmpty } from "class-validator";
import { ManyToOne } from "typeorm";
import { ClienteEntity } from "../../cliente/entities/cliente.entity";
import { CuentaEntity } from "../entities/cuenta.entity";

export class CuentaDTO extends BaseDTO {
  @IsNotEmpty()
  id_cuenta!: number;
  @IsNotEmpty()
  numero_cuenta!: string;
  @IsNotEmpty()
  tipo_cuenta!: string;
  @IsNotEmpty()
  saldo_inicial!: number;
  @IsNotEmpty()
  estado!: string;
  @IsNotEmpty()
  id_cliente!: number;
}
