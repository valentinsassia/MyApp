import "./menu_deslizante.css"

import { useContext } from "react";
import { Contextos } from "../../../context";


function Menu_Deslizante () {

    const { setDeslizar } = useContext(Contextos)

    return (
        <div className="contenedorMenuDeslizante" onClick={() => setDeslizar(true)}>
            <ion-icon name="chevron-back-outline"></ion-icon>
            <img src="https://www.grupoorono.com.ar/themes/grupo-oronio/assets/images/curves/up.png"></img>
        </div>
    )
}

export default Menu_Deslizante