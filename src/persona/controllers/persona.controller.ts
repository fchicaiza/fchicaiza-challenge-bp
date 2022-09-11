import { Request, Response } from "express";
import { PersonaService } from "../services/persona.service";
import { HttpResponse } from "../../shared/response/http.response";

export class PersonaController {
  constructor(
    private readonly personaService: PersonaService = new PersonaService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}
  async getAllPersons(req: Request, res: Response) {
    try {
      const data = await this.personaService.findAllPersons();
      if (data.length === 0) {
        return this.httpResponse.NotFound(res, "No existe dato");
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.Error(res, e);
    }
  }
  async getPersonById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.personaService.getPersonById(Number(id));
      if (!data) {
        return this.httpResponse.NotFound(res, "No existe dato");
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.Error(res, e);
    }
  }
  async createPerson(req: Request, res: Response) {
    try {
      const data = await this.personaService.createPerson(req.body);
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.Error(res, e);
    }
  }
  async updatePerson(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.personaService.updatePerson(Number(id), req.body);
      if (!data.affected) {
        return this.httpResponse.NotFound(res, "Hay un error en actualizar");
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.Error(res, e);
    }
  }
  async deletePerson(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.personaService.deletePerson(Number(id));
      if (!data.affected) {
        return this.httpResponse.NotFound(res, "Hay un error en borrar");
      }
      return this.httpResponse.Ok(res, data);
    } catch (e) {
      return this.httpResponse.Error(res, e);
    }
  }
}
