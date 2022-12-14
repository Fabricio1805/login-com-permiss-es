import { Router } from "express";
import RoleController from "src/controllers/RoleController";

const roleRoutes = Router();
const roleController = new RoleController;

roleRoutes.post('/', roleController.createRole);

export default roleRoutes;