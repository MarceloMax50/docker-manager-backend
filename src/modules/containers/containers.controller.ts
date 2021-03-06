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
  public async show(request: Request, response: Response, next: NextFunction) {
    const containersService = new ContainersService();

    try {
      const { id } = request.params;
      const container = await containersService.show(id);
      return response.json(container);
    } catch (err) {
      next(err);
    }
  }

  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const containersService = new ContainersService();

    try {
      const { body } = request;
      const container = await containersService.create(body);
      return response.json(container);
    } catch (err) {
      next(err);
    }
  }

  public async delete(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const containersService = new ContainersService();

    try {
      const { id } = request.params;
      await containersService.delete(id);
      return response.status(201).json();
    } catch (err) {
       next(err);
    }
  }

  public async deleteAll(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const containersService = new ContainersService();

    try {
      await containersService.deleteAll();
      return response.status(201).json();;
    } catch (err) {
      next(err);
    }
  }
}
