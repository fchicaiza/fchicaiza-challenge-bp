import { BaseRouter } from "../shared/router/router";
import { MovimientosController } from "./controllers/movimiento.controller";

export class MovimientosRouter extends BaseRouter<MovimientosController> {
  constructor() {
    super(MovimientosController);
  }
  routes(): void {
    let endpoint = "/movimientos/";

    this.router.get(endpoint + "listarMovimientos", (req, res) =>
      this.contoller.getAllMovements(req, res)
    );
    this.router.get(endpoint + "buscarMovimiento/:id", (req, res) =>
      this.contoller.getMovementById(req, res)
    );
    this.router.post(endpoint + "crearMovimiento", (req, res) =>
      this.contoller.createMovement(req, res)
    );
    this.router.put(endpoint + "editarMovimiento/:id", (req, res) =>
      this.contoller.updateMovement(req, res)
    );
    this.router.delete(endpoint + "eliminarMovimiento/:id", (req, res) =>
      this.contoller.deleteMovement(req, res)
    );
  }
}
