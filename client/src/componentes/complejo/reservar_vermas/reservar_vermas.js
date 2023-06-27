import "./reservar_vermas.css"

import { useState, useContext } from "react"
import { Contextos } from "../../../context"

function Reservar_VerMas () {

    const {seleccionado, setSeleccionado} = useContext(Contextos)

    return (
        <>
            <div className={`reservar ${seleccionado ? `seleccionado` : ``}`} onClick={
                () => {
                    return (setSeleccionado(true))
                    }}>
                        <p>Reservar</p>
                        <span className="span"></span>
            </div>
            <div className={`masInformacion ${seleccionado ? `` : `seleccionado`}`} onClick={
                () => {
                    return (setSeleccionado(false))
                    }}>
                        <p>Ver Más</p>
                        <span className="span"></span>
            </div>
        </>
    )
}

export default Reservar_VerMas