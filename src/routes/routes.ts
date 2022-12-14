import { Router } from "express";
import loginRoutes from "./login.routes";
import permissionRoutes from "./permissions.routes";
import productsRouter from "./product.routes";
import roleRoutes from "./roles.routes";
import usersRoutes from "./user.routes";

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/login', loginRoutes);
routes.use('/permission', permissionRoutes);
routes.use('/roles', roleRoutes);
routes.use('/products', productsRouter);

export default routes;