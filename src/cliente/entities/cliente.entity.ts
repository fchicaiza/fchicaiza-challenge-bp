import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CuentaEntity } from "../../cuenta/entities/cuenta.entity";

import { PersonaEntity } from "../../persona/entities/persona.entity";

@Entity({ name: "cliente" })
export class ClienteEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_cliente!: number;
  @Column()
  contraseña!: string;
  @Column("char")
  estado!: string;

  @OneToOne(() => PersonaEntity, (persona) => persona.cliente)
  @JoinColumn({ name: "id_cliente" })
  persona!: PersonaEntity;

  @OneToMany(() => CuentaEntity, (cuenta) => cuenta.cliente, {
    eager: true,
    cascade: true,
  })
  cuenta!: CuentaEntity[];
}
