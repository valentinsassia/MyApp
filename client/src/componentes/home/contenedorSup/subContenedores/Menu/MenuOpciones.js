import "./MenuOpciones.css"
import {Link} from "react-router-dom"

function OpcionesMenu (props) {

    return (
        <Link to={props.Direccion} className={`opciones-Menu`}> 
            <p>{props.children}</p>
        </Link>
    )
} 

export default OpcionesMenu