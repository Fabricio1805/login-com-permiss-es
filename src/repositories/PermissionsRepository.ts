import { AppDataSource } from "src/database/data-source";
import Permission from "src/models/Permission";

export const PermissionsRepository = AppDataSource.getRepository(Permission);