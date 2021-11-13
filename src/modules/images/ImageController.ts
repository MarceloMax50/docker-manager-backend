import { NextFunction, Request, Response } from "express";

import ImageDockerApi from "./ImageDockerApi";

class ImageController {
  public async listAll(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const dockerApi = new ImageDockerApi();

      const image = await dockerApi.listAllApi();

      return response.json(image);
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
      const dockerApi = new ImageDockerApi();

      const image = await dockerApi.createApi(name, body);

      return response.json(image);
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
      const dockerApi = new ImageDockerApi();

      const image = await dockerApi.deleteApi(id);

      return response.json(image);
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
      const dockerApi = new ImageDockerApi();

      const image = await dockerApi.deleteAllApi();

      return response.json(image);
    } catch (err) {
      return next(err);
    }
  }
}

export default ImageController;
