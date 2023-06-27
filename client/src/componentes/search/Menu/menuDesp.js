import "./menuDesp.css"

import { useContext } from "react"
import { Contextos } from "../../../context"

function Menu ({Abrir, Click}) {

    const {setRebuscar} = useContext(Contextos)

    return (
        <div className="menu-Contenedor_search">
            <div className="rebuscar" onClick={() => {
                return setRebuscar(true)
            }}>
                <ion-icon name="search-sharp"></ion-icon>
                <p>Buscar Ciudad</p>
            </div>
            <button className={`icono-Contenedor_search ${Abrir ? `open_search` : ""}`} onClick={Click}>
                <span className="arriba-line"></span>
                <span className="medio-line"></span>
                <span className="abajo-line"></span>
            </button>
        </div>
    )
}

export default Menu