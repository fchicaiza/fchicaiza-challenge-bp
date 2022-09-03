import { Request, Response } from "express";
export class PersonController {
  getPerson(req: Request, res: Response) {
    res.status(200).json({ person: "Fernando Chicaiza" });
  }
}
