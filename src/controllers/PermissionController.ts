import { Request, Response } from "express";
import CreatePermissionService from "src/services/CreatePermissionService";

export default class PermissionController {
    public async createPermission(req: Request, res: Response): Promise<Response> {
        const { name, description } = req.body;

        const createPermission = new CreatePermissionService();

        const permission = await createPermission.create({
            name,
            description,
        })

        return res.json({
            permission
        })
    }   
}