import { Request, Response } from "express";
import { CuentaService } from "../services/cuenta.service";
import { HttpResponse } from "../../shared/response/http.response";

export class CuentaController {
  constructor(
    private readonly cuentaService: CuentaService = new CuentaService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  async getAllAccounts(req: Request, res: Response) {
    try {
      const data = await this.cuentaService.findAllAccounts();
      if (data.length === 0) {
        return this.httpResponse.NotFound(res, "No existe dato");
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.Error(res, e);
    }
  }
  async getAccountsById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.cuentaService.findAccountById(Number(id));
      if (!data) {
        return this.httpResponse.NotFound(res, "No existe dato");
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.Error(res, e);
    }
  }
  async createAccount(req: Request, res: Response) {
    try {
      const data = await this.cuentaService.createAccount(req.body);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      console.error(e);
    }
  }
  async updateAccount(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.cuentaService.updateAccount(Number(id), req.body);
      if (!data.affected) {
        return this.httpResponse.NotFound(res, "Hay un error en actualizar");
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.Error(res, e);
    }
  }
  async deleteAccount(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.cuentaService.deleteAccount(Number(id));
      if (!data.affected) {
        return this.httpResponse.NotFound(res, "Hay un error en borrar");
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.Error(res, e);
    }
  }
}
