import "reflect-metadata";
import { createConnection, LoggerOptions } from "typeorm";
import * as dotenv from "dotenv";
import { migrations } from "./migrations/migrations";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { seeders } from "./seeds/seeders";
import { entities } from "./entities/entities";

dotenv.config();

//RUN ONLY DATABASE
createConnection({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: process.env.DB_LOG_LEVEL as LoggerOptions,
  migrations,
  migrationsRun: true,
  namingStrategy: new SnakeNamingStrategy(),
})
  .then((connection) => {
    connection.close();
    console.log("Connection closed");
  })
  .catch((error) => console.error(error));

// RUN SEEDERS
// createConnection({
//   type: "postgres",
//   host: process.env.DB_HOST,
//   port: parseInt(process.env.DB_PORT as string),
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   synchronize: false,
//   logging: process.env.DB_LOG_LEVEL as LoggerOptions,
//   entities,
//   migrations: migrations.concat(seeders),
//   migrationsRun: true,
//   namingStrategy: new SnakeNamingStrategy(),
// })
//   .then((connection) => {
//     connection.close();
//     console.log("Connection closed");
//   })
//   .catch((error) => console.error(error));
