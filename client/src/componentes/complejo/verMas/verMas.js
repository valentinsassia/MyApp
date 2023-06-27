import "./verMas.css"

import { useContext } from "react";
import { Contextos } from "../../../context"

function VerMas () {

    const { informacion } = useContext(Contextos)

    return (
        <div className="subContenedorVerMas">
            <p className="nombre">{informacion.nombre}</p>
            <p className="secundarios">Direccion:</p>
            <p className="terciarios">adas</p>
            <p className="secundarios">Servicios Extras:</p>
            <p className="terciarios">afas</p>
            <p className="secundarios">Redes Sociales:</p>
            <p className="terciarios"></p>
        </div>
    )
}

export default VerMas



{/* <p className="direccion">Direccion:</p>
<p className="psecundarios">f</p>
<span className="spanVerMas"></span>
<p className="servicios">Servicios Extras:</p>
<p className="psecundarios">afa</p>
<span className="spanVerMas"></span>
<p className="redes">Redes Sociales:</p>
<p className="psecundarios">af</p>
<span className="spanVerMas"></span> */}