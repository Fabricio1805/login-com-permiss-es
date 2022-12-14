import { AppDataSource } from "src/database/data-source";
import Role from "src/models/Role";

export const RolesRepository = AppDataSource.getRepository(Role);