import AppError from "src/errors/AppError";
import Product from "src/models/Product";
import { ProductsRepository } from "src/repositories/ProductsRepository";

interface IRequest {
  id: string;
}
export class ShowProductService {
  public async execute({ id }: IRequest): Promise<Product> {
    const product = await ProductsRepository.findOneBy({ id });
    if (!product) {
      throw new AppError('Product not found.');
    }
    return product;
  }
}