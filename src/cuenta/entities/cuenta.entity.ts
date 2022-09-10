import {
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { ClienteEntity } from "../../cliente/entities/cliente.entity";
import { MovimientosEntity } from "../../movimientos/entities/movimientos.entity";

@Entity({ name: "cuenta" })
export class CuentaEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_cuenta!: number;
  @Column()
  numeroCuenta!: number;
  @Column()
  tipoCuenta!: string;
  @Column("decimal", { precision: 10, scale: 2 })
  saldoInicial!: number;
  @Column("char")
  estado!: number;

  @ManyToOne(() => ClienteEntity, (cliente) => cliente.cuenta)
  @JoinColumn({ name: "id_cliente" })
  cliente!: ClienteEntity;

  @OneToMany(() => MovimientosEntity, (movimientos) => movimientos.cuenta)
  movimientos!: MovimientosEntity[];
}
