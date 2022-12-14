import AppError from "src/errors/AppError";
import User from "src/models/User";
import { hash } from 'bcrypt';
import { UsersRepository } from "src/repositories/UsersRepository";
import { RolesRepository } from "src/repositories/RolesRepository";
import { In } from "typeorm";

interface IRequest {
    username: string;
    name: string;
    password: string;
    roles: string[];
}

export default class CreateUserService{
    public async create({ name, username, password, roles }: IRequest ): Promise<User> {
        const userExists = await UsersRepository.findOneBy({ username });

        if (userExists) {
            throw new AppError('username already used');
        }

        const hasedPassword = await hash(password, 8);

        const existsRoles = await RolesRepository.find({
            where: {
                id: In(roles)
            }
        })

        const user = UsersRepository.create({
            name,
            username,
            password: hasedPassword,
            roles: existsRoles,
        })

        await UsersRepository.save(user);

        return user;
    }
}