import { Request, Response } from "express";
import { CuentaService } from "../services/cuenta.service";

export class CuentaController {
  constructor(
    private readonly cuentaService: CuentaService = new CuentaService()
  ) {}
  async getAllAccounts(req: Request, res: Response) {
    try {
      const data = await this.cuentaService.findAllAccounts();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async getAccountsById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.cuentaService.findAccountById(Number(id));
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async createAccount(req: Request, res: Response) {
    try {
      const data = await this.cuentaService.createAccount(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async updateAccount(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.cuentaService.updateAccount(Number(id), req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async deleteAccount(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.cuentaService.deleteAccount(Number(id));
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}
