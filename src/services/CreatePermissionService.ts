import AppError from "src/errors/AppError";
import Permission from "src/models/Permission";
import { PermissionsRepository } from "src/repositories/PermissionsRepository";

interface IRequest {
    name: string;
    description: string;
}
export default class CreatePermissionService {
    public async create({ name, description }: IRequest): Promise<Permission> {
        const existPermission = await PermissionsRepository.findOneBy({ name });
        
        if (existPermission) {
            throw new AppError('Permission already exists!');
        }


        const permission = PermissionsRepository.create({
            name,
            description,
        });

        await PermissionsRepository.save(permission);

        return permission;
    }   
}