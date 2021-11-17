import { NextFunction, Request, Response } from "express";

import { ContainersService } from "./containers.service";

export class ContainersController {
  public async list(request: Request, response: Response, next: NextFunction) {
    const containersService = new ContainersService();

    try {
      const containers = await containersService.list();
      return response.json(containers);
    } catch (err) {
      next(err);
    }
  }

  // public async create(
  //   request: Request,
  //   response: Response,
  //   next: NextFunction
  // ) {
  //   try {
  //     const body = request.body;
  //     const { name } = request.params;
  //     const dockerApi = new ContainerDockerApi();

  //     const container = await dockerApi.createApi(name, body);

  //     return response.json(container);
  //   } catch (err) {
  //     return next(err);
  //   }
  // }

  // public async delete(
  //   request: Request,
  //   response: Response,
  //   next: NextFunction
  // ) {
  //   try {
  //     const { id } = request.params;
  //     const dockerApi = new ContainerDockerApi();

  //     const container = await dockerApi.deleteApi(id);

  //     return response.json(container);
  //   } catch (err) {
  //     return next(err);
  //   }
  // }

  // public async deleteAll(
  //   request: Request,
  //   response: Response,
  //   next: NextFunction
  // ) {
  //   try {
  //     const dockerApi = new ContainerDockerApi();

  //     const container = await dockerApi.deleteAllApi();

  //     return response.json(container);
  //   } catch (err) {
  //     return next(err);
  //   }
  // }
}
