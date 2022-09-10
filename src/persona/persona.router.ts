import { BaseRouter } from "../shared/router/router";
import { PersonaController } from "./controllers/persona.controller";

export class PersonaRouter extends BaseRouter<PersonaController> {
  constructor() {
    super(PersonaController);
  }
  routes(): void {
    let endpoint = "/cliente/";

    this.router.get(endpoint + "listarClientes", (req, res) =>
      this.contoller.getAllPersons(req, res)
    );
    this.router.get(endpoint + "buscarCliente/:id", (req, res) =>
      this.contoller.getPersonById(req, res)
    );
    this.router.post(endpoint + "crearCliente", (req, res) =>
      this.contoller.createPerson(req, res)
    );
    this.router.put(endpoint + "editarCliente/:id", (req, res) =>
      this.contoller.updatePerson(req, res)
    );
    this.router.delete(endpoint + "eliminarCliente/:id", (req, res) =>
      this.contoller.deletePerson(req, res)
    );
  }
}
