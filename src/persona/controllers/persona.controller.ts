import { Request, Response } from "express";
export class PersonaController {
  getPerson(req: Request, res: Response) {
    res.status(200).json({ persona: "Fernando Chicaiza" });
  }
}
