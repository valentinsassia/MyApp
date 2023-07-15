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
        socket.on("dias", async () => {
            const dias = await complejos.find({
                nombre: {
                    $eq: "Barrilete Cosmico"
                }
            })

            const elementos = dias[0].historial.filter(elemento => {
                return elemento
            })

            const Dias = elementos.map(e => {
                return e.dia
            })

            let dia = ["domingo","lunes","martes","miercoles", "jueves", "viernes","sabado"]

            let Total = []
            
            for (let i = 0; i < 7; i++) {
                let cantidad = Dias.filter(e => {
                    return e == dia[i]
                })
                Total.push(cantidad.length)
            }

            socket.emit("diasRes", Total)

        })

        socket.on("horarios", async () => {
            const horarios = await complejos.find({
                nombre: {
                    $eq: "Barrilete Cosmico"
                }
            })

            const elementos = horarios[0].historial.filter(elemento => {
                return elemento
            })

            const Hora = elementos.map(e => {
                return e.hora
            })

            let horariosReducidos = [ ... new Set(Hora) ] 

            let Total = []
            
            for (let i = 0; i < horariosReducidos.length; i++) {
                let cantidad = Hora.filter(e => {
                    return e == horariosReducidos[i]
                })
                Total.push(cantidad.length)
            }

            socket.emit("horariosRes", {Total, horariosReducidos})
        })

        socket.on("anual", async (año) => {
            const reservas = await complejos.find({
                nombre: {
                    $eq: "Barrilete Cosmico"
                }
            })

            const elementos = reservas[0].historial.filter(elemento => {
                return elemento.año == año
            })

            const meses = elementos.map(elemento => {
                return elemento.mes
            })

            let mes = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]

            let Total = []

            for (let i = 0; i < 12; i++) {
                let cantidad = elementos.filter(e => {
                    return e.mes == mes[i]
                })
                
                Total.push(cantidad.length)
            }

            socket.emit("anualRes", Total)
        })

        socket.on("mensual", async (datos) => {
            const reservas = await complejos.find({
                nombre: {
                    $eq: "Barrilete Cosmico"
                }
            })

            const elementos = reservas[0].historial.filter(elemento => {
                return elemento.mes == "diciembre"
            })

            const semanas = elementos.map(elemento => {
                return elemento.semana
            })

            let semanasReducidas = [ ... new Set(semanas) ]

            let semanasReducidas_2 = semanasReducidas.sort()
        
            let Total = []

            for (let i = 0; i < 4; i++) {
                let cantidad = elementos.filter(e => {
                    return e.semana == semanasReducidas_2[i]
                })
                
                Total.push(cantidad.length)
            }

            if (datos[1] == true) {
                socket.emit("mensualRes", Total)
            }
            if (datos[1] == false) {
                socket.emit("mensualAnteriorRes", Total)
            }
            if (datos[1] == null) {
                socket.emit("mensualElegidoRes", Total)
            }
            
        })

        socket.on("semana", async (datos) => {
            const reservas = await complejos.find({
                nombre: {
                    $eq: "Barrilete Cosmico"
                }
            })
    
            const Historial = reservas[0].historial.filter(elemento => {
                return elemento.semana == "26"
            })
    
            let dias = ["domingo","lunes","martes","miercoles", "jueves", "viernes","sabado"]
    
            let Total = []
    
            for(let i = 0; i < 7; i++) {
                let cantidad = Historial.filter(e => {
                    return e.dia == dias[i]
                })
                Total.push(cantidad.length)
            }

            if (datos[1] == true) {
                socket.emit("semanaRes", Total)
            }
            if (datos[1] == false) {
                socket.emit("semanaAnteriorRes", Total)
            }

            if (datos[1] == null) {
                socket.emit("semanaElegidaRes", Total)
            }
        })

        



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
            let meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]

            let hoy = new Date()
            let numDia = dias[hoy.getDay()]
            let mes = meses[hoy.getMonth()]
            let año = hoy.getFullYear()
            let semana = numeroDeSemana(hoy)

            let Fecha = {"dia" : `${numDia}`, "semana" : `${semana}`, "mes" : `${mes}`, "año" : `${año}`, "hora" : `${hora}`, "usuario" : "Juani Sassia"}

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
