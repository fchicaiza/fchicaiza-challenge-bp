import { Request, Response } from "express";
import { MovimientosService } from "../services/movimientos.service";
import { HttpResponse } from "../../shared/response/http.response";

export class MovimientosController {
  constructor(
    private readonly movimientosService: MovimientosService = new MovimientosService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  async getAllMovements(req: Request, res: Response) {
    try {
      const data = await this.movimientosService.findAllMovements();
      if (data.length === 0) {
        return this.httpResponse.NotFound(res, "No existe dato");
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.Error(res, e);
    }
  }
  async getMovementById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.movimientosService.findMovementById(Number(id));
      if (!data) {
        return this.httpResponse.NotFound(res, "No existe dato");
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.Error(res, e);
    }
  }
  async createMovement(req: Request, res: Response) {
    try {
      const data = await this.movimientosService.createMovement(req.body);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.Error(res, e);
    }
  }
  async updateMovement(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.movimientosService.updateMovement(
        Number(id),
        req.body
      );
      if (!data.affected) {
        return this.httpResponse.NotFound(res, "Hay un error en actualizar");
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.Error(res, e);
    }
  }
  async deleteMovement(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.movimientosService.deleteMovement(Number(id));
      if (!data.affected) {
        return this.httpResponse.NotFound(res, "Hay un error en borrar");
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.Error(res, e);
    }
  }
}
