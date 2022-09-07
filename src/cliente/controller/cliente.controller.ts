import { Request, Response } from "express";
import { ClienteService } from "../services/cliente.service";

export class ClienteController {
  constructor(
    private readonly clienteService: ClienteService = new ClienteService()
  ) {}
  async getAllCustomers(req: Request, res: Response) {
    try {
      const data = await this.clienteService.findAllCustomers();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async getCustomerById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.clienteService.findCustomerById(Number(id));
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async createCustomer(req: Request, res: Response) {
    try {
      const data = await this.clienteService.createCustomer(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async updateCustomer(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.clienteService.updateCustomer(
        Number(id),
        req.body
      );
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async deleteCustomer(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.clienteService.deleteCustomer(Number(id));
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}
