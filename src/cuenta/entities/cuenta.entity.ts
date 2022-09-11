import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ClienteEntity } from "../../cliente/entities/cliente.entity";
import { BaseEntity } from "../../config/base.entity";
import { MovimientosEntity } from "../../movimientos/entities/movimientos.entity";

@Entity({ name: "cuenta" })
export class CuentaEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_cuenta!: number;
  @Column()
  numero_cuenta!: string;
  @Column()
  tipo_cuenta!: string;
  @Column("decimal", { precision: 10, scale: 2 })
  saldo_inicial!: number;
  @Column("char")
  estado!: string;
  @JoinColumn()
  id_cliente!: number;

  @OneToMany(() => MovimientosEntity, (movimientos) => movimientos.cuenta)
  movimientos!: MovimientosEntity[];
}
