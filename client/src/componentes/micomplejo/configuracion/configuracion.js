import "./configuracion.css"

import { useContext } from "react"
import { Contextos } from "../../../context"

import Horasydias from "./componentes/horasydias"
import Nombre from "./componentes/nombre"
import Canchas from "./componentes/canchas"
import Redes from "./componentes/redes"
import Cerrarsesion from "./componentes/cerrarsesion"

import HorasydiasPest from "./componentes/pestañas/horasydiaspest"
import CanchasPest from "./componentes/pestañas/canchaspest"

function Configuraciones () { 
    
    const {condicion, setCondicion} = useContext(Contextos)

    const horasydiasPest = () => {
        if (condicion == "horasydias") {
           return <HorasydiasPest />
        }
    }
    const canchasPest = () => {
        if (condicion == "canchas") {
           return <CanchasPest />
        }
    }
    
    return (
        <>
            <div className="configuraciones">
                <div className="contenedorconfiguraciones">
                    <Nombre />
                    <Horasydias />
                    <Canchas />
                    <Redes />
                    <Cerrarsesion />
                </div>

                {horasydiasPest()}
                {canchasPest()}
            </div>

            <div className={condicion ? `cortina` : ``} onClick={() => setCondicion()}></div>
        </>
    )
} 

export default Configuraciones