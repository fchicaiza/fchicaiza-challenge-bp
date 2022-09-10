import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { CuentaDTO } from "../dto/cuenta.dto";
import { CuentaEntity } from "../entities/cuenta.entity";

export class CuentaService extends BaseService<CuentaEntity> {
  constructor() {
    super(CuentaEntity);
  }
  async findAllAccounts(): Promise<CuentaEntity[]> {
    return (await this.execRepository).find();
  }
  async getAccountById(id_cuenta: number): Promise<CuentaEntity | null> {
    return (await this.execRepository).findOneBy({ id_cuenta });
  }

  async createAccount(body: CuentaEntity): Promise<CuentaEntity> {
    return (await this.execRepository).save(body);
  }
  async deleteAccount(id_cuenta: number): Promise<DeleteResult> {
    return (await this.execRepository).delete(id_cuenta);
  }
  async updateAccount(
    id_cuenta: number,
    infoUpdate: CuentaDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id_cuenta, infoUpdate);
  }
}
