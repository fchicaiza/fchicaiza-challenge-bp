import { Column, Entity, PrimaryColumn, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { ClienteEntity } from "../../cliente/entities/cliente.entity";

@Entity({ name: "persona" })
export class PersonaEntity extends BaseEntity {
  @PrimaryColumn()
  id_persona!: number;
  @Column()
  nombre!: string;
  @Column()
  genero!: string;
  @Column()
  edad!: number;
  @Column()
  identificacion!: string;
  @Column()
  direccion!: string;
  @Column()
  telefono!: string;

  @OneToMany(() => ClienteEntity, (cliente) => cliente.persona)
  cliente!: ClienteEntity;
}
