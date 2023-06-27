import "./barrainferior.css"

import { Link } from "react-router-dom"

function Barrainferior ({nombre, condicion}) {
    return (
        <div className="contenedorBarrainferior">
            <Link to={`/complejo/${nombre}`} className={`${condicion == "reservas" ? "Seleccionado" : ""}`}>
                <ion-icon name="time-outline"></ion-icon>
            </Link>
            <Link to={`/complejo/${nombre}/estadisticas`} className={`${condicion == "estadisticas" ? "Seleccionado" : ""}`}>
                <ion-icon name="bar-chart-outline"></ion-icon>
            </Link>
            <Link to={`/complejo/${nombre}/pago`} className={`${condicion == "pago" ? "Seleccionado" : ""}`}>
                <ion-icon name="card-outline"></ion-icon>
            </Link>
            <Link to={`/complejo/${nombre}/configuracion`} className={`${condicion == "configuracion" ? "Seleccionado" : ""}`}>
                <ion-icon name="settings-outline"></ion-icon>
            </Link>
        </div>
    )
}

export default Barrainferior