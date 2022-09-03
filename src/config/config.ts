import * as dotenv from "dotenv";
import { DataSourceOptions, DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { AppDataSource } from "./data.source";

export abstract class ConfigServer {
  constructor() {
    const nodeNameEnv = this.createPathEnv(this.nodeEnv);
    dotenv.config({
      path: nodeNameEnv,
    });
  }
  public getEnviroment(k: string): string | undefined {
    return process.env[k];
  }
  public getNumberEnv(k: string): number {
    // Read enviroment variable and return number
    return Number(this.getEnviroment(k));
  }
  public get nodeEnv(): string {
    return this.getEnviroment("NODE_ENV")?.trim() || ""; // Read environment variable and always return a string
  }
  public createPathEnv(path: string): string {
    const arrEnv: Array<string> = ["env"]; // Transform array into string chain with custom format
    if (path.length > 0) {
      const strigToArray = path.split(".");
      arrEnv.unshift(...strigToArray);
    }
    return "." + arrEnv.join(".");
  }

  get initConnect(): Promise<DataSource> {
    return AppDataSource.initialize();
  }
}
