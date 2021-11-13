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

      const container = await dockerApi.listAllApi();

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
      const body = request.body;
      const { name } = request.params;
      const dockerApi = new ContainerDockerApi();

      const container = await dockerApi.createApi(name, body);

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
      const { id } = request.params;
      const dockerApi = new ContainerDockerApi();

      const container = await dockerApi.deleteApi(id);

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

      const container = await dockerApi.deleteAllApi();

      return response.json(container);
    } catch (err) {
      return next(err);
    }
  }
}

export default ContainerController;
