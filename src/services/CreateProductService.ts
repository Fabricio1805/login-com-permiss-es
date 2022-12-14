import AppError from "src/errors/AppError";
import Product from "src/models/Product";
import { ProductsRepository } from "src/repositories/ProductsRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateProductService {
  public async execute({ name, description }: IRequest): Promise<Product> {
    const productExist = await ProductsRepository.findOneBy({ name });

    if (productExist) {
      throw new AppError('There s already one product with this name');
    }

    const product = ProductsRepository.create({
      name,
      description,
    });

    await ProductsRepository.save(product);

    return product;
  }
}
