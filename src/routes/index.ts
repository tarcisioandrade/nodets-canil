import * as PageController from "@controllers/page.controller";
import * as SearchController from "@controllers/search.controller";
import { Router } from "express";

const router = Router();

router.get("/", PageController.home);
router.get("/dogs", PageController.dogs);
router.get("/cats", PageController.cats);
router.get("/fishes", PageController.fishes);

router.get("/search", SearchController.search);

export default router;
