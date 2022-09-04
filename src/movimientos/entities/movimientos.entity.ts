import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { ClienteEntity } from "../../cliente/entities/cliente.entity";
import { CuentaEntity } from "../../cuenta/entities/cuenta.entity";

@Entity({ name: "movimientos" })
export class MovimientosEntity extends BaseEntity {
  @PrimaryColumn()
  id_movimiento!: number;
  @Column()
  fecha!: string;
  @Column()
  tipoMovimiento!: string;
  @Column()
  valor!: number;
  @Column()
  saldo!: string;

  @ManyToOne(() => CuentaEntity, (cuenta) => cuenta.movimientos)
  @JoinColumn({ name: "id_cuenta" })
  cuenta!: CuentaEntity;
}
