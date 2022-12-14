import { Router } from "express";
import SessionsController from "src/controllers/SessionController";

const loginRoutes = Router();
const sessionController = new SessionsController();

loginRoutes.post('/', sessionController.createSessions);

export default loginRoutes;