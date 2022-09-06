import {
  Column,
  Entity,
  PrimaryColumn,
  OneToMany,
  TableInheritance,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { ClienteEntity } from "../../cliente/entities/cliente.entity";

@Entity({ name: "persona" })
@TableInheritance({ column: { type: "varchar", name: "type" } })
export abstract class PersonaEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_persona!: number;
  @Column()
  nombre!: string;
  @Column({ length: 1 })
  genero!: string;
  @Column()
  edad!: number;
  @Column({ length: 13 })
  identificacion!: string;
  @Column({ length: 255 })
  direccion!: string;
  @Column({ length: 10 })
  telefono!: string;

  @OneToMany(() => ClienteEntity, (cliente) => cliente.persona)
  cliente!: ClienteEntity;
}
