import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { ClienteEntity } from "../../cliente/entities/cliente.entity";
import { CuentaEntity } from "../../cuenta/entities/cuenta.entity";

@Entity({ name: "movimientos" })
export class MovimientosEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_movimiento!: number;
  @Column("date")
  fecha!: string;
  @Column()
  tipoMovimiento!: string;
  @Column("decimal", { precision: 10, scale: 2 })
  valor!: number;
  @Column("decimal", { precision: 10, scale: 2 })
  saldo!: number;

  @ManyToOne(() => CuentaEntity, (cuenta) => cuenta.movimientos)
  @JoinColumn({ name: "id_cuenta" })
  cuenta!: CuentaEntity;
}
