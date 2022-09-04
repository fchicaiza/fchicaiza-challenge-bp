import {
  Column,
  Entity,
  PrimaryColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { ClienteEntity } from "../../cliente/entities/cliente.entity";
import { MovimientosEntity } from "../../movimientos/entities/movimientos.entity";

@Entity({ name: "cuenta" })
export class CuentaEntity extends BaseEntity {
  @PrimaryColumn()
  id_cuenta!: number;
  @Column()
  numeroCuenta!: number;
  @Column()
  tipoCuenta!: string;
  @Column()
  saldoInicial!: number;
  @Column()
  estado!: string;

  @ManyToOne(() => ClienteEntity, (cliente) => cliente.cuenta)
  @JoinColumn({ name: "id_cliente" })
  cliente!: ClienteEntity;

  @OneToMany(() => MovimientosEntity, (movimientos) => movimientos.cuenta)
  movimientos!: MovimientosEntity[];
}
