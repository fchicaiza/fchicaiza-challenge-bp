import { Column, ChildEntity } from "typeorm";
import { ClienteEntity } from "../../cliente/entities/cliente.entity";

@ChildEntity({ name: "persona" })
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
}
