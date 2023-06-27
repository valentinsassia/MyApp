import OpcionesMenu from "./MenuOpciones"
import "./menuOculto.css"


function MenuOculto ({ Abrir }) {
    return (
        <div className={`menu-Contenedor-Oculto_search ${Abrir ? `open` : "close"}`}>
            <OpcionesMenu
                Abrir={Abrir}
            >Soporte</OpcionesMenu>
            <OpcionesMenu
                Abrir={Abrir}
            >Mis Reservas</OpcionesMenu>
            <OpcionesMenu
                Abrir={Abrir}
            >Mi Complejo</OpcionesMenu>
            <OpcionesMenu
                Abrir={Abrir}
            >Inicio</OpcionesMenu>
        </div>
    )
}

export default MenuOculto