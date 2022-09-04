import {
  Column,
  Entity,
  PrimaryColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CuentaEntity } from "../../cuenta/entities/cuenta.entity";
import { PersonaEntity } from "../../persona/entities/persona.entity";

@Entity({ name: "cliente" })
export class ClienteEntity extends BaseEntity {
  @PrimaryColumn()
  id_cliente!: number;
  @Column()
  contraseña!: string;
  @Column({ length: 1 })
  estado!: string;

  @OneToOne(() => PersonaEntity, (persona) => persona.cliente)
  @JoinColumn({ name: "id_persona" })
  persona!: PersonaEntity;

  @OneToMany(() => CuentaEntity, (cuenta) => cuenta.cliente)
  cuenta!: CuentaEntity[];
}
