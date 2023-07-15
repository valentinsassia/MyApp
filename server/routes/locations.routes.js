// las rutas con sus repectivas funciones / peticiones

import { Router } from "express";
import { getInformacion, getLocation, loginUser } from "../controllers/location.controllers.js";
const router = Router()

router.get("/search/:id_location", getLocation)

router.get("/:nombre", getInformacion)

router.post("/login", loginUser)

router.post("/complejo/:nombre", loginUser)

export default router