import "reflect-metadata";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { PersonaRouter } from "./persona/persona.router";
import { ConfigServer } from "./config/config";
import { DataSource } from "typeorm";
import { ClienteRouter } from "./cliente/cliente.router";
// import { CuentaRouter } from "./cuenta/cuenta.router";
// import { MovimientoRouter } from "./movimientos/movimientos.router";

class ServerBootstrap extends ConfigServer {
  public app: express.Application = express();
  private port: number = this.getNumberEnv("PORT");
  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.dbConnect();
    this.app.use(morgan("dev"));
    this.app.use(cors());

    this.app.use("", this.routers());
    this.listen();
  }

  routers(): Array<express.Router> {
    return [
      new PersonaRouter().router,
      new ClienteRouter().router,
      // new CuentaRouter().router,
      // new MovimientoRouter().router,
    ];
  }

  async dbConnect(): Promise<DataSource | void> {
    return this.initConnect
      .then(() => {
        console.log("Connect Success");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Server Listening on port ${this.port}`);
    });
  }
}
new ServerBootstrap();
