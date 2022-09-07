import {
  Column,
  Entity,
  PrimaryColumn,
  OneToMany,
  TableInheritance,
  PrimaryGeneratedColumn,
  ChildEntity,
} from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { ClienteEntity } from "../../cliente/entities/cliente.entity";

// @Entity({ name: "persona" })
// @TableInheritance({ column: { type: "varchar", name: "type" } })
// @ChildEntity({ name: "persona" })
@ChildEntity()
export class PersonaEntity extends ClienteEntity {
  @Column()
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

  // @OneToMany(() => ClienteEntity, (cliente) => cliente.persona)
  // cliente!: ClienteEntity;
}
