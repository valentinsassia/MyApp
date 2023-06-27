// las rutas con sus repectivas funciones / peticiones

import { Router } from "express";
import { estadisticas, getInformacion, getLocation, loginUser, upDate } from "../controllers/location.controllers.js";
const router = Router()

router.get("/search/:id_location", getLocation)

router.get("/:nombre", getInformacion)

router.post("/login", loginUser)

router.post("/complejo/:nombre", loginUser)

router.post("/complejo/:nombre/estadisticas", estadisticas)

export default router