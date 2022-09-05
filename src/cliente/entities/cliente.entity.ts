import {
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CuentaEntity } from "../../cuenta/entities/cuenta.entity";
import { PersonaEntity } from "../../persona/entities/persona.entity";

@Entity({ name: "cliente" })
export class ClienteEntity {
  // @PrimaryGeneratedColumn()
  // id_cliente!: number;
  @Column(() => PersonaEntity)
  cli: PersonaEntity | undefined;
  @Column()
  contraseña!: string;
  @Column({ length: 1 })
  estado!: string;

  // @OneToOne(() => PersonaEntity, (persona) => persona.cliente)
  // @JoinColumn({ name: "id_persona" })
  // persona!: PersonaEntity;

  @OneToMany(() => CuentaEntity, (cuenta) => cuenta.cliente)
  cuenta!: CuentaEntity[];
}
