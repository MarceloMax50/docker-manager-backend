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
router.get("/containers", containerController.create);
router.post("/containers/:id", containerController.delete);
router.post("/containers", containerController.deleteAll);

/**
 * Image routes
 */
router.get("/images", imageController.listAll);
router.get("/images", imageController.create);
router.post("/images/:id", imageController.delete);
router.post("/images", imageController.deleteAll);

export = router;
