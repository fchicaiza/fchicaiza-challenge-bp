import { Request, Response } from "express";
import { ClienteService } from "../services/cliente.service";
import { HttpResponse } from "../../shared/response/http.response";

export class ClienteController {
  constructor(
    private readonly clienteService: ClienteService = new ClienteService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  async getAllCustomers(req: Request, res: Response) {
    try {
      const data = await this.clienteService.findAllCustomers();
      if (data.length === 0) {
        return this.httpResponse.NotFound(res, "No existe dato");
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.Error(res, e);
    }
  }
  async getCustomerById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.clienteService.findCustomerById(Number(id));
      if (!data) {
        return this.httpResponse.NotFound(res, "No existe dato");
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.Error(res, e);
    }
  }
  async createCustomer(req: Request, res: Response) {
    try {
      const data = await this.clienteService.createCustomer(req.body);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.Error(res, e);
    }
  }
  async updateCustomer(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.clienteService.updateCustomer(
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
  async deleteCustomer(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.clienteService.deleteCustomer(Number(id));
      if (!data.affected) {
        return this.httpResponse.NotFound(res, "Hay un error en borrar");
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.Error(res, e);
    }
  }
}
