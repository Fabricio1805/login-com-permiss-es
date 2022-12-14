import { AppDataSource } from "src/database/data-source";
import Product from "src/models/Product";

export const ProductsRepository = AppDataSource.getRepository(Product);