import { AppDataSource } from "src/database/data-source";
import User from "src/models/User";

export const UsersRepository = AppDataSource.getRepository(User);