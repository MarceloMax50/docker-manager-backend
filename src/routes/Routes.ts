import express from "express";

import ContainerController from "../modules/containers/ContainerController";
import ImageController from "../modules/images/ImageController";

const router = express.Router();

const containerController = new ContainerController();
const imageController = new ImageController();

/**
 * Container routes
 */
router.get("/containers", containerController.listAll);
router.post("/containers/:name", containerController.create);
router.delete("/containers/:id", containerController.delete);
router.delete("/containers", containerController.deleteAll);

/**
 * Image routes
 */
router.get("/images", imageController.listAll);
router.post("/images/:name", imageController.create);
router.delete("/images/:id", imageController.delete);
router.delete("/images", imageController.deleteAll);

export = router;
