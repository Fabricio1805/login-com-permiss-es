import { Request, Response } from "express";
import CreateUserService from "src/services/CreateUserService";

export default class UserController {
    public async createUser(req: Request, res: Response): Promise<Response> {
        const { username, name, password, roles } = req.body;
        
        const createUser = new CreateUserService();

        const user = await createUser.create({
            name,
            username,
            password,
            roles
        });

        const { password: _, ...newUser } = user;
        return res.status(200).json(newUser);
    }
}