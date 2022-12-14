import AppError from "src/errors/AppError";
import User from "src/models/User";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import authConfig from '../config/auth';
import { UsersRepository } from "src/repositories/UsersRepository";

interface IResquest {
    username: string;
    password: string;
}

interface IResponse{
    user: User;
    token: string;
}
export default class CreateSessionService {
    public async login({ username, password }: IResquest): Promise<IResponse> {
        const user = await UsersRepository.findOneBy({ username });
        
        if (!user) {
            throw new AppError('Incorrect username/password combination.', 401);
        }

        const verifyPass = await bcrypt.compare(password, user.password);

        if (!verifyPass) {
            throw new AppError('Incorrect email/password combination.', 401);
        }

        const token = jwt.sign({ id: user.id }, authConfig.jwt.secret, {
            expiresIn: authConfig.jwt.expiresIn,
        });

        return {
            user,
            token,
        }
    }
}