import { BaseRouter } from "./router";
import { PersonController } from "../controllers/person.controller";

export class PersonRouter extends BaseRouter<PersonController> {
  constructor() {
    super(PersonController);
  }
  routes(): void {
    this.router.get("/person", (req, res) =>
      this.contoller.getPerson(req, res)
    );
  }
}
