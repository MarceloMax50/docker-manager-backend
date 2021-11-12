import { NextFunction, Request, Response } from "express";

import ContainerDockerApi from "./ContainerDockerApi";

class ContainerController {
  public async listAll(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const dockerApi = new ContainerDockerApi();

      const container = await dockerApi.show();

      return response.json(container);
    } catch (err) {
      return next(err);
    }
  }
  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const dockerApi = new ContainerDockerApi();

      const container = await dockerApi.show();

      return response.json(container);
    } catch (err) {
      return next(err);
    }
  }
  public async delete(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const dockerApi = new ContainerDockerApi();

      const container = await dockerApi.show();

      return response.json(container);
    } catch (err) {
      return next(err);
    }
  }
  public async deleteAll(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const dockerApi = new ContainerDockerApi();

      const container = await dockerApi.show();

      return response.json(container);
    } catch (err) {
      return next(err);
    }
  }
}

export default ContainerController;
