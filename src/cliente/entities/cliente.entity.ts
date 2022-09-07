import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  TableInheritance,
} from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CuentaEntity } from "../../cuenta/entities/cuenta.entity";

@Entity({ name: "cliente" })
@TableInheritance({ column: { type: "varchar", name: "type" } })
export abstract class ClienteEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_cliente!: number;
  @Column()
  contraseña!: string;
  @Column("char")
  estado!: string;

  @OneToMany(() => CuentaEntity, (cuenta) => cuenta.cliente)
  cuenta!: CuentaEntity[];
}
