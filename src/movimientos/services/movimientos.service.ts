import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { MovimientosDTO } from "../dto/movimiento.dto";
import { MovimientosEntity } from "../entities/movimientos.entity";

export class MovimientosService extends BaseService<MovimientosEntity> {
  constructor() {
    super(MovimientosEntity);
  }
  async findAllMovements(): Promise<MovimientosEntity[]> {
    return (await this.execRepository).find();
  }
  async findMovementById(
    id_movimiento: number
  ): Promise<MovimientosEntity | null> {
    return (await this.execRepository).findOneBy({ id_movimiento });
  }

  async createMovement(body: MovimientosEntity): Promise<MovimientosEntity> {
    return (await this.execRepository).save(body);
  }
  async deleteMovement(id_movimiento: number): Promise<DeleteResult> {
    return (await this.execRepository).delete(id_movimiento);
  }
  async updateMovement(
    id_movimiento: number,
    infoUpdate: MovimientosDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id_movimiento, infoUpdate);
  }
}
