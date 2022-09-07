import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { ClienteDTO } from "../dto/cliente.dto";
import { ClienteEntity } from "../entities/cliente.entity";

export class ClienteService extends BaseService<ClienteEntity> {
  constructor() {
    super(ClienteEntity);
  }
  async findAllCustomers(): Promise<ClienteEntity[]> {
    return (await this.execRepository).find();
  }
  async findCustomerById(id_cliente: number): Promise<ClienteEntity | null> {
    return (await this.execRepository).findOneBy({ id_cliente });
  }

  async createCustomer(body: ClienteEntity): Promise<ClienteEntity> {
    return (await this.execRepository).save(body);
  }
  async deleteCustomer(id_cliente: number): Promise<DeleteResult> {
    return (await this.execRepository).delete(id_cliente);
  }
  async updateCustomer(
    id_cliente: number,
    infoUpdate: ClienteDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id_cliente, infoUpdate);
  }
}
