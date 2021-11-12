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

      const image = await dockerApi.show();

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
      const dockerApi = new ImageDockerApi();

      const image = await dockerApi.show();

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
      const dockerApi = new ImageDockerApi();

      const image = await dockerApi.show();

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

      const image = await dockerApi.show();

      return response.json(image);
    } catch (err) {
      return next(err);
    }
  }
}

export default ImageController;
