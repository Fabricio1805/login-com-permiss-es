import { Router } from 'express';
import ProductController from 'src/controllers/ProductController';
import { is } from 'src/middlewares/permission';
import Authenticate from '../middlewares/Authenticated';

const productsRouter = Router();
const productsController = new ProductController();

productsRouter.use(Authenticate);
productsRouter.get('/',is(['ROLE_USER']), productsController.listProducts);

productsRouter.get(
  '/:id',
  productsController.showProduct,
);

productsRouter.post(
  '/',
  is(['ROLE_ADMIN']),
  productsController.createProduct,
);

export default productsRouter;
