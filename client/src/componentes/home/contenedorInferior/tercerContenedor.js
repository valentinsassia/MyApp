import "./tercerContenedor.css";
import Contactos from "./subcomponentes/contactos/contactos";



// importamos el useContext, y el Contexto para modificar el useState de este modulo
import { useContext } from "react";
import { Contextos } from "../../../context" 


function TercerContenedor () {

    const {Contexto} = useContext(Contextos)
    
    return (
        <div className={`${Contexto ? `pie-Contenedor` : `none`}`}>
            <p className="QuienesSomos">¿Quienes Somos?</p>
            <p className="NuestrosContactos">Nuestros Contactos</p>
           <Contactos />
        </div>
    )
}


export default TercerContenedor