import { BaseRouter } from "../shared/router/router";
import { ClienteController } from "./controller/cliente.controller";

export class ClienteRouter extends BaseRouter<ClienteController> {
  constructor() {
    super(ClienteController);
  }
  routes(): void {
    let endpoint = "/cliente/";

    this.router.get(endpoint + "listarClientes", (req, res) =>
      this.contoller.getAllCustomers(req, res)
    );
    this.router.get(endpoint + "buscarCliente/:id", (req, res) =>
      this.contoller.getCustomerById(req, res)
    );
    this.router.post(endpoint + "crearCliente", (req, res) =>
      this.contoller.createCustomer(req, res)
    );
    this.router.put(endpoint + "editarCliente/:id", (req, res) =>
      this.contoller.updateCustomer(req, res)
    );
    this.router.delete(endpoint + "eliminarCliente/:id", (req, res) =>
      this.contoller.deleteCustomer(req, res)
    );
  }
}
