import "./menuDesp.css"
import { useState } from "react"

function Menu ({Abrir, Click}) {
    return (
        <div className="menu-Contenedor">
            <button className={`icono-Contenedor ${Abrir ? `open` : ""}`} onClick={Click}>
                <span className="arriba-line"></span>
                <span className="medio-line"></span>
                <span className="abajo-line"></span>
            </button>
        </div>
    )
}

export default Menu