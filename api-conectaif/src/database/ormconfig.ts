import * as dotenv from "dotenv";
import { join } from "path";
import { DataSource, DataSourceOptions } from "typeorm";

dotenv.config();

export const connectionOptions = new DataSource({
  type: "postgres",
  host: process.env.HOST_BD,
  port: parseInt(process.env.PORT_BD, 10),
  username: process.env.USERNAME_BD,
  password: process.env.SENHA_BD,
  database: process.env.DATABASE_NAME,
  entities: [join(__dirname, "/../**/*.entity{.ts,.js}")],
  // We are using migrations, synchronize should be set to false.
  synchronize: false,
  dropSchema: false,
  connectTimeoutMS: 1000000000,

  logging: ["warn", "error"],
  // logging: true,

  migrations: [join(__dirname, "migrations/*{.ts,.js}")],

  // type: "postgres",
  // host: "localhost",
  // port: 5432,
  // username: "postgres",
  // password: "postgres",
  // database: "conectaif",
  // entities: [__dirname + "/../**/*.entity.{js,ts}"],
  // synchronize: true,
  // migrations: [join(__dirname, "migrations/*{.ts,.js}")],
});
