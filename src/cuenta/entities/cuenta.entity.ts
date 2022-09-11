import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ClienteEntity } from "../../cliente/entities/cliente.entity";
import { BaseEntity } from "../../config/base.entity";

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
  @Column()
  id_cliente!: number;

  // @ManyToOne(() => ClienteEntity, (cliente) => cliente.cuenta)
  // @JoinColumn({ name: "id_cliente" })
  // cliente!: ClienteEntity;
}
