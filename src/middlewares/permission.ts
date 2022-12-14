import { NextFunction, Request, Response } from 'express';
import { UsersRepository } from 'src/repositories/UsersRepository';

export const is = (role: string[]) => {
    const roleAuthorized = async (req: Request, res: Response, next: NextFunction) => {
        const id_user = req.user.id;
        const user = await UsersRepository.findOne({
            where: {
                id: id_user
            },
            relations: {
                roles: true
            }
        })

        const userRoles = user?.roles.map(role => role.name);

        const existsRoles = userRoles?.some(r => role.includes(r));

        if (existsRoles) {
            return next();
        }

        return res.status(401).json({
            message: 'Not Authorized!',
        });
    };
    return roleAuthorized;
}