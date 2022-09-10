import { Request, Response } from "express";
import { PersonaService } from "../services/persona.service";

export class PersonaController {
  constructor(
    private readonly personaService: PersonaService = new PersonaService()
  ) {}
  async getAllPersons(req: Request, res: Response) {
    try {
      const data = await this.personaService.findAllPersons();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async getPersonById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.personaService.getPersonById(Number(id));
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async createPerson(req: Request, res: Response) {
    try {
      const data = await this.personaService.createPerson(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async updatePerson(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.personaService.updatePerson(Number(id), req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async deletePerson(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.personaService.deletePerson(Number(id));
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}
