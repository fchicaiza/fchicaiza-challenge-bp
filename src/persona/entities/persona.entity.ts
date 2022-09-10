import {
  Column,
  ChildEntity,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ClienteEntity } from "../../cliente/entities/cliente.entity";
import { BaseEntity } from "../../config/base.entity";

// @ChildEntity({ name: "persona" })
@Entity({ name: "persona" })
export class PersonaEntity extends BaseEntity {
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

  @OneToOne(() => ClienteEntity, (cliente) => cliente.persona, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    eager: true,
    cascade: true,
  })
  // @JoinColumn({ name: "id_cliente" })
  cliente!: ClienteEntity;
}
