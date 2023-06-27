import "./MenuOpciones.css"
import {Link} from "react-router-dom"

function OpcionesMenu (props) {

    return (
        
            <Link to={props.direccion} className="opciones-Menu_search"> 
                <p>{props.children}</p>
            </Link>
        
    )
} 

export default OpcionesMenu