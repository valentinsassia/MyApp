import "./menuDesp.css"
import { useState } from "react"

function Menu ({Abrir, Click, Aparecer}) {
    return (
        <div className="menu-Contenedor_search">
            <div className="iconoBuscar-Contenedor_search" onClick={Aparecer}>
                <ion-icon name="search"></ion-icon>
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