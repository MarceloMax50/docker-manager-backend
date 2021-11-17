import { NextFunction, Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
  public async authenticate(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const authService = new AuthService();

    try {
      const { body } = request;
      const identityToken = await authService.authenticate(body);

      return response.json({ identityToken });
    } catch (err) {
      next(err);
    }
  }
}
