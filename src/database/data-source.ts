import { DataSource } from "typeorm";
import 'dotenv/config';
import 'reflect-metadata';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "login",
    synchronize: true,
    logging: true,
    entities: ['./src/models/*ts'],
    migrations: ['./src/database/migrations/*ts'],
})