import AppError from "src/errors/AppError";
import Role from "src/models/Role";
import { PermissionsRepository } from "src/repositories/PermissionsRepository";
import { RolesRepository } from "src/repositories/RolesRepository";
import { In } from "typeorm";

interface IRequest {
    name: string;
    description: string;
    permissions: string[];
}
export default class CreateRoleService {
    public async create({ name, description, permissions }: IRequest): Promise<Role> {
        const existRole = await RolesRepository.findOneBy({ name });
        
        if (existRole) {
            throw new AppError('Role already exists!');
        }

        const existsPermissions = await PermissionsRepository.find({
            where: {
                id: In(permissions)
            }
        })
        
        const role = RolesRepository.create({
            name,
            description,
            permission: existsPermissions,
        });

        await RolesRepository.save(role);
        
        return role;
    }   
}