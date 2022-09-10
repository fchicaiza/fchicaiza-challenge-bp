import { BaseRouter } from "../shared/router/router";
import { ClienteController } from "./controller/cliente.controller";

export class ClienteRouter extends BaseRouter<ClienteController> {
  constructor() {
    super(ClienteController);
  }
  routes(): void {
    let endpoint = "/datosCliente/";

    this.router.get(endpoint + "listarDatosClientes", (req, res) =>
      this.contoller.getAllCustomers(req, res)
    );
    this.router.get(endpoint + "buscarDatosCliente/:id", (req, res) =>
      this.contoller.getCustomerById(req, res)
    );
    this.router.post(endpoint + "crearDatosCliente", (req, res) =>
      this.contoller.createCustomer(req, res)
    );
    this.router.put(endpoint + "editarDatosCliente/:id", (req, res) =>
      this.contoller.updateCustomer(req, res)
    );
    this.router.delete(endpoint + "eliminarDatosCliente/:id", (req, res) =>
      this.contoller.deleteCustomer(req, res)
    );
  }
}
