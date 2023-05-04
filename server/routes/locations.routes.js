// las rutas con sus repectivas funciones / peticiones

import { Router } from "express";
import { getInformacion, getLocation } from "../controllers/location.controllers.js";
const router = Router()

router.get("/search/:id_location", getLocation)

router.get("/:nombre", getInformacion)

export default router