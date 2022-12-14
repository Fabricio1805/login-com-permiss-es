import { Request, Response } from 'express';
import CreateSessionService from 'src/services/CreateSessionService';

export default class SessionsController {
  public async createSessions(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;

    const createSession = new CreateSessionService();
    const user = await createSession.login({
      username,
      password,
    });

    return res.json({
      user,
    });
  }
}