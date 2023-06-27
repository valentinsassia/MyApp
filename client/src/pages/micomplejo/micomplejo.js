import "./micomplejo.css"

import Reservas from "../../componentes/micomplejo/reservas/reservas"
import Estadisticas from "../../componentes/micomplejo/estadisticas/estadisticas"
import Barrainferior from "../../componentes/micomplejo/barrainferior/barrainferior.js"

import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { deCrypt } from "../../crypto"

import io from "socket.io-client"
const socket = io("http://localhost:4000")

function MiComplejo ({condicion}) {

    const params = useParams()
    const nombre = params.nombre
    localStorage.setItem("name", nombre)    

    const [horarios, setHorarios] = useState()
    const [Open , setOpen] = useState(false)

    const navigate = useNavigate()
    
    useEffect(()=>{
        try {
            const storageEmail = localStorage.getItem("email")
            const storagePass = localStorage.getItem("pass")
            const peticion = async (datos) => await axios.post("/complejo/:nombre", datos )
            if (storageEmail) {
                const datos = {
                    email: deCrypt(storageEmail),
                    contraseña: deCrypt(storagePass)
                }
                const Condicion = peticion(datos)
                if (Condicion) {
                    socket.emit("complejo", nombre)
                    socket.on("informacion", (informacion) => {
                        setHorarios(informacion[0].horarios)
                    })
                    socket.on(`${nombre}`, (horarios) => {
                        setHorarios(horarios)
                    })
                }
            }
        } catch (error) {
            navigate("/login")
        }
    }, [])

    const reservas = () => {
        if (condicion == "reservas") {
            return (
                <Reservas 
                horarios = {horarios}
                /> 
            )
        }
    }

    const estadisticas = () => {
        if (condicion == "estadisticas") {
            return (
                <Estadisticas />
            )
        } 
    }

        return (
            <div className="contenedorMiComplejo">
                <button className={`icono-Contenedor ${Open ? `open` : ``}`} onClick={() => setOpen(!Open)}>
                    <span className="arriba-line"></span>
                    <span className="medio-line"></span>
                    <span className="abajo-line"></span>
                </button>
                <div className={`${Open ? `deslizarContenedor` : `none`}`}>
                    <Link to={"/"}><p>Inicio</p></Link>
                    <Link><p>Soporte</p></Link>
                </div>
                {reservas()}
                {estadisticas()}
               <Barrainferior 
                    nombre = {nombre}
                    condicion = {condicion}
               />
                <div className={`${Open ? `cortina` : ``}`} onClick={() => setOpen(false)}></div>
            </div>
        )
}

export default MiComplejo