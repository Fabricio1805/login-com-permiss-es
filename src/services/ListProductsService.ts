import Product from "src/models/Product";
import { ProductsRepository } from "src/repositories/ProductsRepository";

export class ListProductService {
  public async execute(): Promise<Product[]> {
    const products = ProductsRepository.find();

    return products;
  }
}
