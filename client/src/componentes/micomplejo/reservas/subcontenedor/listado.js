import "./listado.css"

import { useState } from "react"

function Listado () {

    const [deslizar, setDeslizar] = useState(false)

    return (
        <div className="listadocontenedor">
            <div className={`usuario ${deslizar ? `editar` : ``}`}>
                <ion-icon name="person-circle-outline"></ion-icon>
                <div onClick={() => setDeslizar(!deslizar)}><ion-icon name="chevron-down-outline"></ion-icon></div>
            </div>
            <div className={deslizar ? `abrir` : ``}></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
        </div>
    )
}

export default Listado