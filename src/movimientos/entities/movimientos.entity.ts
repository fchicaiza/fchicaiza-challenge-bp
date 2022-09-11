import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../../config/base.entity";

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
  @Column()
  id_cuenta!: number;

  //   @OneToMany(
  //     () => CuentaEntity,
  //     (movimiento) => movimiento.cuenta
  //   )
  //   cuenta!: MovimientoEntity[];
}
