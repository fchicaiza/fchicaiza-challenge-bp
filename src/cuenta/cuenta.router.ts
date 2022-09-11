import { BaseRouter } from "../shared/router/router";
import { CuentaController } from "./controller/cuenta.controller.dto";

export class CuentaRouter extends BaseRouter<CuentaController> {
  constructor() {
    super(CuentaController);
  }
  routes(): void {
    let endpoint = "/cuenta/";

    this.router.get(endpoint + "listarCuentas", (req, res) =>
      this.contoller.getAllAccounts(req, res)
    );
    this.router.get(endpoint + "buscarCuenta/:id", (req, res) =>
      this.contoller.getAccountsById(req, res)
    );
    this.router.post(endpoint + "crearCuenta", (req, res) =>
      this.contoller.createAccount(req, res)
    );
    this.router.put(endpoint + "editarCuenta/:id", (req, res) =>
      this.contoller.updateAccount(req, res)
    );
    this.router.delete(endpoint + "eliminarCuenta/:id", (req, res) =>
      this.contoller.deleteAccount(req, res)
    );
  }
}
