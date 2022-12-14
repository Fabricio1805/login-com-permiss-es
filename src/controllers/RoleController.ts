import { Request, Response } from "express";
import CreateRoleService from "src/services/CreateRolesService";

export default class RoleController {
    public async createRole(req: Request, res: Response): Promise<Response> {
        const { name, description, permissions } = req.body;

        const createRole = new CreateRoleService();

        const role = await createRole.create({
            name,
            description,
            permissions
        })

        return res.json({
            role
        })
    }   
}