// importamos el modelo llamado "Complejos" de Mongo
import complejos from "../models/Complejos.js"

export const getLocation = async (req, res) => {
    try {
    const paramsId = req.params.id_location
    const peticion = await complejos.find({
        id_location: {
            $eq: paramsId
        }
    })
    res.json(peticion)
    } catch (error) {console.log(error)}
}

export const getInformacion = async (req, res) => {
    try {
    const paramsNombre = req.params.nombre
    const peticion = await complejos.find({
        nombre: {
            $eq: paramsNombre
        }
    })
    res.json(peticion)
    } catch (error) {console.log(error)}
}