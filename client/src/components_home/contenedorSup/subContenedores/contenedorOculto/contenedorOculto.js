import "./contenedorOculto.css"
import OpcionesBuscar from "./subContenedorOculto"
import { useState } from "react"

import {Link} from "react-router-dom"


function ContenedorOculto ({ condicion, close }) {

    // para abrir o cerrar contenedor

    const [Open, setOpen] = useState(false)

    const Clicked = () => {
        return setOpen(!Open)
    }


    // Api

    const peticion = async () => { 
        await fetch("https://apis.datos.gob.ar/georef/api/provincias")
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => { 
            setEstatica(json.provincias)
        })
        .catch(error => console.log(error))
    }
    
        // funcion para ver lo que el cliente esta escribiento 

    const handleChange = e => {
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }

        // funcion para pasarle como parametro a setDinamica lo que se esta escribiendo 

    const filtrar = (terminoDeBusqueda) => {
        var ResultadosBusqueda = estatica.filter((elemento)=>{
            if (terminoDeBusqueda < 1) {
                return false
            }
            else if(elemento.nombre.toString().toLowerCase().includes(terminoDeBusqueda.toLowerCase())){
                return elemento;
            }
        });
        setDinamica(ResultadosBusqueda)
    }

    // useState para hacer buscador en tiempo real

    const [dinamica, setDinamica] = useState([])
    const [estatica, setEstatica] = useState([])
    const [busqueda, setBusqueda] = useState("")

    return (

        <div className={`contenedor ${condicion ? `contenedorOpen` : ""} ${Open ? `dobleOpen` : ``}`}>

            <div className={`${Open ? `none` : `cerrarContenedor`}`} onClick={close}>
                <ion-icon name="chevron-down-outline"></ion-icon>
            </div>    

            <div className={`${Open ? `cerrarContenedor` : `none`}`} onClick={Clicked}>
                <ion-icon name="chevron-down-outline"></ion-icon>
            </div>   

                {/* Codigo relacionado al backend */}


            <input 
                onClick={peticion}
                className={Open ? `buscarInput` : `displayNone`} 
                onChange={handleChange}>
            </input>

            
            {dinamica.map((dinamica) => {
                return <div 
                        key={dinamica.id} 
                        className={!Open ? `displayNone` : `` || dinamica ? `contenedor_provincias` : `displayNone`}>
                            <Link to="/search/23"><p>{dinamica.nombre}</p></Link>
                       </div>
            })}

                {/* fin del codigo relacionado al backend */}

            <OpcionesBuscar
                nombreClase={Open ? `displayNone` : "buscar"}
                parrafo="Agregar Ubicación"
                onlyAgregarUbi={Clicked}
                icono={<ion-icon name="add-circle-outline"></ion-icon>}
            /> 

            <OpcionesBuscar
                nombreClase={Open ? `displayNone` : "buscar"}
                parrafo="Mi Ubicación Actual"
                icono={<ion-icon name="earth-outline"></ion-icon>}
            /> 
            
         </div>

    )
}

export default ContenedorOculto
