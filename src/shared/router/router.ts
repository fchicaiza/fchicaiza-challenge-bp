import { Router } from "express";
export class BaseRouter<T> {
  public router: Router;
  public contoller: T;
  // public middleware:U
  constructor(TController: { new (): T }) {
    this.router = Router();
    this.contoller = new TController();
    this.routes();
  }
  routes() {}
}
