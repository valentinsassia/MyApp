import "./contenedorOculto.css"
import OpcionesBuscar from "./subContenedorOculto"
import { useState, useContext } from "react"

import {Link} from "react-router-dom"
import { Contextos } from "../../../../../context"


function ContenedorOculto ({ condicion, close }) {

    // useState para aparece pie de pagina
    const {setContexto} = useContext(Contextos)

    // para abrir o cerrar contenedor

    const [Open, setOpen] = useState(false)

    const Clicked = () => {
        return setOpen(!Open)
    }


    // Api (peticion a las ciudades)
    const {peticion} = useContext(Contextos)

    peticion()
    
    // funcion para ver lo que el cliente esta escribiento 

    const {handleChange} = useContext(Contextos) 
 
    // useState para hacer buscador en tiempo real

    const {dinamica, setDinamica, estatica, setEstatica, busqueda, setBusqueda} = useContext(Contextos)

    return (

        <div className={`contenedor ${condicion ? `contenedorOpen` : ""} ${Open ? `dobleOpen` : ``}`}>

            <div className={`${Open ? `none` : `cerrarContenedor`}`} onClick={close}>
                <ion-icon name="chevron-down-outline"></ion-icon>
            </div>    

            <div className={`${Open ? `cerrarContenedor` : `none`}`} onClick={Clicked}>
                <ion-icon name="chevron-down-outline"></ion-icon>
            </div>   

                {/* Codigo relacionado al backend */}

            <div className={Open ? `contenedorformulario` : `displayNone`} >
                <ion-icon name="earth-outline"></ion-icon>
                <form className="formLocalidad">
                    <input 
                        type="text"
                        id="inputLocalidad"
                        onChange={handleChange}
                        autoComplete="off"
                        required>
                    </input>
                    <label>
                        Buscar Localidad
                    </label>
                </form>
            </div>

            {dinamica.map((dinamica) => {
                return (
                        <div 
                            key={dinamica.id} 
                            className={!Open ? `displayNone` : `` || dinamica ? `contenedor_provincias` : `displayNone`}>
                            <Link to={`/search/${dinamica.id}`} onClick={() => setContexto(true)}><p>{dinamica.nombre + "," + " " + dinamica.provincia.nombre}</p></Link>
                       </div>
                )
            })}

                {/* fin del codigo relacionado al backend */}

            <OpcionesBuscar
                Open={Open}
                parrafo="Agregar Ubicación"
                onlyAgregarUbi={Clicked}
                icono={<ion-icon name="add-circle-outline"></ion-icon>}
            /> 

            <OpcionesBuscar
                Open={Open}
                parrafo="Mi Ubicación Actual"
                icono={<ion-icon name="earth-outline"></ion-icon>}
            /> 
            
         </div>

    )
}

export default ContenedorOculto
