import "./complejo.css"

import DateAndCanchas from "../../componentes/complejo/dateandcancha/dateandcanchas";
import Horarios from "../../componentes/complejo/horarios/horarios";
import Reservar_VerMas from "../../componentes/complejo/reservar_vermas/reservar_vermas";
import Menu_Deslizante from "../../componentes/complejo/menu/menu_deslizante.js"
import Menu_Deslizante_Oculto from "../../componentes/complejo/menu/menu_deslizante_oculto";
import VerMas from "../../componentes/complejo/verMas/verMas";
import Imagenes from "../../componentes/complejo/imagenes/imagenes";

import { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Contextos } from "../../context";

import io from "socket.io-client"
const socket = io("http://localhost:4000")

function Complejo () {

    const params = useParams()
    const nombre = params.nombre

    const {informacion, setInformacion} = useContext(Contextos)
    const {horarios, setHorarios} = useContext(Contextos)
    const {hora} = useContext(Contextos)
    const {horaSeleccionada, setHoraSeleccionada} = useContext(Contextos)
    const {setAcceso} = useContext(Contextos)
    const {seleccionado} = useContext(Contextos)

    useEffect(()=>{
        try {
            socket.emit("complejo", nombre)
            socket.on("informacion", (informacion) => {
                setHorarios(informacion[0].horarios)
                setInformacion(informacion[0])
            })
            socket.on(`${nombre}`, (Horarios) => {
                setHorarios(Horarios)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    const ModuloHorarios = () => {
        if (hora.length) {
            return (<Horarios />)
        }
    }
    
    const ModuloDateandcanchas = () => {
        if(horarios) {
            return (<DateAndCanchas />)
        }
    }

    const Boton = () => {
        if (horaSeleccionada[0] == "true") {
            return (
                <Link className="boton botonSeleccionado" to={`/${nombre}/${horaSeleccionada[1]}`} onClick={
                    () => {
                        setAcceso(true)
                        setHoraSeleccionada("false")
                    }}>
                        <p>Reservar</p>
                </Link>
            )
        }
        if (horarios) {
            return (
            <div className={`boton`} ><p>Reservar</p></div>
            )
        }
      }

    const Reservar = () => {
        if (seleccionado && informacion) {
            return (
            <div className="subContenedorReservar">
                <>
                    {ModuloDateandcanchas()}
                    {ModuloHorarios()}
                    {Boton()}
                </>
            </div>
            )
        }
    }  

    const Vermas = () => {
        if (!seleccionado) {
            return (
                <VerMas />
            )
        }
    }

    const Imagen = () => {
        if(informacion) {
            return (
                <div className="contenedormedio">
                    <Imagenes />
                </div>
            )
        }
    }

    return (
        <div className="AppComplejos">
            <div className="contenedorsuperior">
                <Reservar_VerMas />
            </div>

            {Imagen()}

            <Menu_Deslizante />
            <Menu_Deslizante_Oculto />

            <div className="contenedorinferior">
                {Reservar()}
                {Vermas()}
            </div>

        </div>
    )
}

export default Complejo