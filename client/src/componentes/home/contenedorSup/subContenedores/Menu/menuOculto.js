import OpcionesMenu from "./MenuOpciones"
import "./menuOculto.css"


function MenuOculto ({ Abrir }) {

    const condicional =localStorage.getItem("name")

    return (
        <div className={`menu-Contenedor-Oculto ${Abrir ? `open` : ""}`}>
            <OpcionesMenu>Soporte</OpcionesMenu>
            <OpcionesMenu>Mis Reservas</OpcionesMenu>
            <OpcionesMenu
                Direccion = {condicional ? `/complejo/${condicional}` : `/login`}>
                Mi Complejo
            </OpcionesMenu>
        </div>
    )
}

export default MenuOculto