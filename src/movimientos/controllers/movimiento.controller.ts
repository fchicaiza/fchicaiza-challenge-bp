import { Request, Response } from "express";
import { MovimientosService } from "../services/movimientos.service";

export class MovimientosController {
  constructor(
    private readonly movimientosService: MovimientosService = new MovimientosService()
  ) {}
  async getAllMovements(req: Request, res: Response) {
    try {
      const data = await this.movimientosService.findAllMovements();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async getMovementById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.movimientosService.findMovementById(Number(id));
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async createMovement(req: Request, res: Response) {
    try {
      const data = await this.movimientosService.createMovement(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async updateMovement(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.movimientosService.updateMovement(
        Number(id),
        req.body
      );
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async deleteMovement(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.movimientosService.deleteMovement(Number(id));
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}
