// importamos el modelo llamado "Complejos" de Mongo
import complejos from "../models/Complejos.js"

export const estadisticas = async (req,res) => {
    try {
        const reservas = await complejos.find({
            nombre: {
                $eq: "Barrilete Cosmico"
            }
        })
        const Historial = await reservas[0].historial.filter(elemento => {
            return elemento.semana == "26"
        })
        const dias = Historial.map(elemento => {
            return elemento.dia
        })
        console.log(Historial)
    } catch (error) {
        console.log(error)
    }
}

export const loginUser = async (req,res) => {
    try {
        const {email, contraseña} = req.body
        const peticion = await complejos.find({
            $and: [
                {email : email},
                {contraseña : contraseña}
            ]})
    
        if (peticion.length) {
            res.json(peticion)
        } 
        else res.sendStatus(404)
    } catch (error) {
        console.log(error)
    }

} 


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

export const upDate = async (nombre, dia, hora) => {
   try { 
    if (dia == "dia1") {
        switch (hora) {
            case "17:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia1.0": { "17:00" : "false" } } }, {new:true} )
            case "18:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia1.1": { "18:00" : "false" } } }, {new:true} )
            case "19:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia1.2": { "19:00" : "false" } } }, {new:true} )
            case "20:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia1.3": { "20:00" : "false" } } }, {new:true} )
            case "21:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia1.4": { "21:00" : "false" } } }, {new:true} )
            case "22:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia1.5": { "22:00" : "false" } } }, {new:true} )
            case "23:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia1.6": { "23:00" : "false" } } }, {new:true} )
        }
    }
    if (dia == "dia2") {
        switch (hora) {
            case "17:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia2.0": { "17:00" : "false" } } }, {new:true} )
            case "18:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia2.1": { "18:00" : "false" } } }, {new:true} )
            case "19:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia2.2": { "19:00" : "false" } } }, {new:true} )
            case "20:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia2.3": { "20:00" : "false" } } }, {new:true} )
            case "21:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia2.4": { "21:00" : "false" } } }, {new:true} )
            case "22:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia2.5": { "22:00" : "false" } } }, {new:true} )
            case "23:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia2.6": { "23:00" : "false" } } }, {new:true} )
        }
    }
    if (dia == "dia3") {
        switch (hora) {
            case "17:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia3.0": { "17:00" : "false" } } }, {new:true} )
            case "18:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia3.1": { "18:00" : "false" } } }, {new:true} )
            case "19:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia3.2": { "19:00" : "false" } } }, {new:true} )
            case "20:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia3.3": { "20:00" : "false" } } }, {new:true} )
            case "21:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia3.4": { "21:00" : "false" } } }, {new:true} )
            case "22:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia3.5": { "22:00" : "false" } } }, {new:true} )
            case "23:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia3.6": { "23:00" : "false" } } }, {new:true} )
        }
    }
    if (dia == "dia4") {
        switch (hora) {
            case "17:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia4.0": { "17:00" : "false" } } }, {new:true} )
            case "18:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia4.1": { "18:00" : "false" } } }, {new:true} )
            case "19:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia4.2": { "19:00" : "false" } } }, {new:true} )
            case "20:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia4.3": { "20:00" : "false" } } }, {new:true} )
            case "21:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia4.4": { "21:00" : "false" } } }, {new:true} )
            case "22:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia4.5": { "22:00" : "false" } } }, {new:true} )
            case "23:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia4.6": { "23:00" : "false" } } }, {new:true} )
        }
    }
    if (dia == "dia5") {
        switch (hora) {
            case "17:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia5.0": { "17:00" : "false" } } }, {new:true} )
            case "18:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia5.1": { "18:00" : "false" } } }, {new:true} )
            case "19:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia5.2": { "19:00" : "false" } } }, {new:true} )
            case "20:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia5.3": { "20:00" : "false" } } }, {new:true} )
            case "21:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia5.4": { "21:00" : "false" } } }, {new:true} )
            case "22:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia5.5": { "22:00" : "false" } } }, {new:true} )
            case "23:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia5.6": { "23:00" : "false" } } }, {new:true} )
        }
    }
    if (dia == "dia6") {
        switch (hora) {
            case "17:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia6.0": { "17:00" : "false" } } }, {new:true} )
            case "18:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia6.1": { "18:00" : "false" } } }, {new:true} )
            case "19:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia6.2": { "19:00" : "false" } } }, {new:true} )
            case "20:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia6.3": { "20:00" : "false" } } }, {new:true} )
            case "21:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia6.4": { "21:00" : "false" } } }, {new:true} )
            case "22:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia6.5": { "22:00" : "false" } } }, {new:true} )
            case "23:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia6.6": { "23:00" : "false" } } }, {new:true} )
        }
    }
    if (dia == "dia7") {
        switch (hora) {
            case "17:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia7.0": { "17:00" : "false" } } }, {new:true} )
            case "18:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia7.1": { "18:00" : "false" } } }, {new:true} )
            case "19:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia7.2": { "19:00" : "false" } } }, {new:true} )
            case "20:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia7.3": { "20:00" : "false" } } }, {new:true} )
            case "21:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia7.4": { "21:00" : "false" } } }, {new:true} )
            case "22:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia7.5": { "22:00" : "false" } } }, {new:true} )
            case "23:00":
                return complejos.findOneAndUpdate({nombre}, { $set: { "horarios.dia7.6": { "23:00" : "false" } } }, {new:true} )
        }
    }
   }
   catch (e) {res.json("no se pudo")}
}