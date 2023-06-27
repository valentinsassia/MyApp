// Solo se encarga de configurar express y socketio

import express from "express"
import { Server as SocketServer } from "socket.io"
import http from "http"
import cors from "cors"

import rutas from "./routes/locations.routes.js"
import { upDate } from "./controllers/location.controllers.js"

import complejos from "./models/Complejos.js"
    
const app = express()
const server = http.createServer(app)
const io = new SocketServer(server, {
    cors: {
        origin: "http://localhost:3000"
    }
})

app.use(cors())

io.on("connection", (socket) => {
    try {
        socket.on("complejo", async (complejo) => {
            const informacion = await complejos.find({nombre: {$eq: complejo}})
            if (informacion.length) {
            socket.emit("informacion", informacion)
            }
        })

        socket.on("modificar", async (datos) => {
            const nombre = datos.nombre
            const hora = datos.hora
            const dia = datos.dia

            const newHorarios = await upDate(nombre,dia,hora)
            socket.broadcast.emit(`${nombre}`, newHorarios.horarios)

            const numeroDeSemana = fecha => {
                const DIA_EN_MILISEGUNDOS = 1000 * 60 * 60 * 24,
                    DIAS_QUE_TIENE_UNA_SEMANA = 7,
                    JUEVES = 4;
                fecha = new Date(Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()));
                let diaDeLaSemana = fecha.getUTCDay(); // Domingo es 0, sábado es 6
                if (diaDeLaSemana === 0) {
                    diaDeLaSemana = 7;
                }
                fecha.setUTCDate(fecha.getUTCDate() - diaDeLaSemana + JUEVES);
                const inicioDelAño = new Date(Date.UTC(fecha.getUTCFullYear(), 0, 1));
                const diferenciaDeFechasEnMilisegundos = fecha - inicioDelAño;
                return Math.ceil(((diferenciaDeFechasEnMilisegundos / DIA_EN_MILISEGUNDOS) + 1) / DIAS_QUE_TIENE_UNA_SEMANA);
            };

            let dias = ["domingo","lunes","martes","miercoles", "jueves", "viernes","sabado"]

            let hoy = new Date()
            let numDia = dias[hoy.getDay()]
            let mes = hoy.getMonth() + 1
            let año = hoy.getFullYear()
            let semana = numeroDeSemana(hoy)

            let Fecha = {"dia" : `${numDia}`, "semana" : `${semana}`, "mes" : `${mes}`, "año" : `${año}`, "usuario" : "Valentiin"}

            await complejos.updateOne({nombre: {$eq: nombre}}, { $addToSet: { "historial": Fecha}})
        })

        socket.on("micomplejo", async (nombre) => {
            const datos = await complejos.find({nombre: {$eq: nombre}})
            if (datos.length) {
                socket.emit("datos", datos[0])
            }
        })

    } catch (error) {
        console.log(error)
    }

})

app.use(express.json())
app.use(rutas)

export default server
