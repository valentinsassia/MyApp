import "./tercerContenedor.css";

// importamos el useContext, y el Contexto para modificar el useState de este modulo
import { useContext } from "react";
import { Contextos } from "../../context";

function TercerContenedor () {

    const {Contexto} = useContext(Contextos)
    
    return (
        <div className={`${Contexto ? `pie-Contenedor` : `none`}`}>
           
        </div>
    )
}


export default TercerContenedor