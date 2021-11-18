import { NextFunction, Request, Response } from "express";

import { ImagesService } from "./images.service";

export class ImagesController {
  public async list(request: Request, response: Response, next: NextFunction) {
    const imagesService = new ImagesService();

    try {
      const images = await imagesService.list();
      return response.json(images);
    } catch (err) {
      next(err);
    }
  }
  public async show(request: Request, response: Response, next: NextFunction) {
    const imagesService = new ImagesService();

    try {
      const { id } = request.params;
      const image = await imagesService.show(id);
      return response.json(image);
    } catch (err) {
      next(err);
    }
  }

  public async create(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const imagesService = new ImagesService();

    try {
      const { body } = request;
      const image = await imagesService.create(body);
      return response.json(image);
    } catch (err) {
      next(err);
    }
  }

  public async delete(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const imagesService = new ImagesService();

    try {
      const { id } = request.params;
      await imagesService.delete(id);
      return response.status(201).json();;
    } catch (err) {
       next(err);
    }
  }

  public async deleteAll(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const imagesService = new ImagesService();

    try {
      await imagesService.deleteAll();
      return response.status(201).json();;
    } catch (err) {
      next(err);
    }
  }
}
