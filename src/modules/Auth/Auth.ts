import { NextFunction, Request, Response } from "express";

import DockerApiConfig from "../../configs/DockerApiConfig";

class Auth {
  public async authenticate(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const { username } = request.body;
      const { password } = request.body;
      const { serveraddress } = request.body;
      const dockerApi = new DockerApiConfig();

      const token = await dockerApi.getToken(username, password, serveraddress);

      return response.json(token);
    } catch (err) {
      return next(err);
    }
  }
}
export default Auth;
