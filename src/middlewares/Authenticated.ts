import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}
export default function Authenticate(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token is missing.');
  }
  // BEARER DPS O TOKEN
  const token = authHeader.split(' ')[1];

  try {
    const decodeToken = verify(token, authConfig.jwt.secret);
    const { id } = decodeToken as TokenPayload;

    req.user = {
      id,
    };
    next();
  } catch (error) {
    throw new AppError('Invalid JWT Token');
  }
}
