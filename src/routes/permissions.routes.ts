import { Router } from "express";
import PermissionController from "src/controllers/PermissionController";

const permissionRoutes = Router();
const permissionController = new PermissionController;

permissionRoutes.post('/', permissionController.createPermission);

export default permissionRoutes;