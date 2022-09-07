import { BaseRouter } from "../shared/router/router";
import { PersonaController } from "./controllers/persona.controller";

export class PersonRouter extends BaseRouter<PersonaController> {
  constructor() {
    super(PersonaController);
  }
  routes(): void {
    let endpoint = "/persona/";
    this.router.get(endpoint + "getPersona", (req, res) =>
      this.contoller.getPerson(req, res)
    );
  }
}
