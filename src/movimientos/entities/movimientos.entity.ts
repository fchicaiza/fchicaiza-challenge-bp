import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CuentaEntity } from "../../cuenta/entities/cuenta.entity";

@Entity({ name: "movimiento" })
export class MovimientosEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_movimiento!: number;
  @Column("date")
  fecha!: string;
  @Column()
  tipo_movimiento!: string;
  @Column("decimal", { precision: 10, scale: 2 })
  valor!: number;
  @Column("decimal", { precision: 10, scale: 2 })
  saldo!: number;
  // @Column()
  // id_cuenta!: number;

  @ManyToOne(() => CuentaEntity, (cuenta) => cuenta.movimientos)
  @JoinColumn({ name: "id_cuenta" })
  cuenta!: CuentaEntity;
}
