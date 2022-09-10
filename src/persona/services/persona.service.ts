import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { PersonaDTO } from "../dto/persona.dto";
import { PersonaEntity } from "../entities/persona.entity";

export class PersonaService extends BaseService<PersonaEntity> {
  constructor() {
    super(PersonaEntity);
  }
  async findAllPersons(): Promise<PersonaEntity[]> {
    return (await this.execRepository).find();
  }
  async getPersonById(id_persona: number): Promise<PersonaEntity | null> {
    return (await this.execRepository).findOneBy({ id_persona });
  }

  async createPerson(body: PersonaEntity): Promise<PersonaEntity> {
    return (await this.execRepository).save(body);
  }
  async deletePerson(id_persona: number): Promise<DeleteResult> {
    return (await this.execRepository).delete(id_persona);
  }
  async updatePerson(
    id_persona: number,
    infoUpdate: PersonaDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id_persona, infoUpdate);
  }
}
