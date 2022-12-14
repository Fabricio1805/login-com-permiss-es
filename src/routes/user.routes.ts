import { Router } from "express";
import UserController from "src/controllers/UserController";

const usersRoutes = Router();
const usersController = new UserController();

usersRoutes.post('/', usersController.createUser);

export default usersRoutes;