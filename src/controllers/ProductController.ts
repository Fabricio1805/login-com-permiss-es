import { Request, Response } from 'express';
import { CreateProductService } from 'src/services/CreateProductService';
import { ListProductService } from 'src/services/ListProductsService';
import { ShowProductService } from 'src/services/ShowProductService';

export default class ProductController {
  public async createProduct(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
        name,
        description,
    });

    return res.json(product);
  }
  public async listProducts(req: Request, res: Response): Promise<Response> {
    const listProducts = new ListProductService();

    const products = await listProducts.execute();
    console.log(req.user);
    return res.json(products);
  }

  public async showProduct(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const showProduct = new ShowProductService();

    const product = await showProduct.execute({ id });

    return res.json(product);
  }

}
