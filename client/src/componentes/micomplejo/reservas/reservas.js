import "./reservas.css"

import Fecha from "./subcontenedor/fecha"
import Time from "./subcontenedor/time"
import Listado from "./subcontenedor/listado";

import { useContext } from "react";
import { Contextos } from "../../../context" 


function Reservas ({horarios}) {

    const {times} = useContext(Contextos) 

    const fecha = () => {
        if (horarios) {
            return (
                <>
                    <Fecha 
                        horas = {horarios}
                    />
                </>
            )
        }
    }

    const time = () => {
        if (times.length) {
            return (
                    <Time />
            )
        }
    }    

    return (
        <div className="contenedorTime">
            {fecha()}
            {time()}
            <Listado />
        </div>
    )
}

export default Reservas