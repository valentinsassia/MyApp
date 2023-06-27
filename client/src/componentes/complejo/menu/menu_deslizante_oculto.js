import "./menu_deslizante_oculto.css"

import { useContext } from "react";
import { Contextos } from "../../../context";
import { Link } from "react-router-dom"

function Menu_Deslizante_Oculto () {

    const {setHoraSeleccionada} = useContext(Contextos)
    const {deslizar, setDeslizar} = useContext(Contextos)

    const menudeslizanteoculto = () => {
        if (deslizar) {
            return (
                <>
                <div className="MenuDeslizanteOculto">
                    <div className="subMenuDeslizanteOculto">
                        <Link className="Link" to={"/"} onClick={() => setHoraSeleccionada("false")}><p>Inicio</p></Link>
                        <Link className="Link"><p>Mis Reservas</p></Link>
                        <Link className="Link" to={"/login"}><p>Mi Complejo</p></Link>
                        <Link className="Link"><p>Soporte</p></Link>
                    </div>
                </div>
                <div className="MenuDeslizanteOculto_cerrar" onClick={() => setDeslizar(false)}>
                    <img src="https://www.grupoorono.com.ar/themes/grupo-oronio/assets/images/curves/up.png"></img>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </div>
                </>
            )
        }
    }
    
    return (
        <>
            {menudeslizanteoculto()}
            <div className={deslizar ? `cortina` : ""} onClick={() => setDeslizar(false)}></div>
        </>
    )
}

export default Menu_Deslizante_Oculto