import {
  Column,
  Entity,
  ChildEntity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CuentaEntity } from "../../cuenta/entities/cuenta.entity";
import { PersonaEntity } from "../../persona/entities/persona.entity";

@ChildEntity({ name: "cliente" })
export class ClienteEntity extends PersonaEntity  {
  constructor() {
    super();
  }
  @Column()
  id_cliente!: number;
  @Column()
  contraseña!: string;
  @Column("char")
  estado!: string;

  @OneToOne(() => PersonaEntity, (persona) => persona.cliente)
  @JoinColumn({ name: "id_cliente" })
  persona!: PersonaEntity;

  @OneToMany(() => CuentaEntity, (cuenta) => cuenta.cliente)
  cuenta!: CuentaEntity[];
}
