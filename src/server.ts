import "reflect-metadata";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { PersonRouter } from "./persona/persona.router";
import { ConfigServer } from "./config/config";
import { DataSource } from "typeorm";

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

    this.app.use("/api", this.routers());
    this.listen();
  }

  routers(): Array<express.Router> {
    return [new PersonRouter().router];
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
