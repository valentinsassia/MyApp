import './search.css';
import {useEffect, useState} from "react"
import Carousel from '../components_search/carousel/carousel';
import Menu from '../components_search/Menu/menuDesp';
import MenuOculto from '../components_search/Menu/menuOculto';
import Buscar from '../components_search/reBuscar/buscar';
import OcultoContenedorBuscar from '../components_search/reBuscar/contenedorOculto';

// importamos axios para realizar la peticion http
import axios from "axios";

// declaramos la funcion para reealizar la peticion 
async function peticionApi () {
  try {
    const response = await axios.get("/search/23")
    return response
  }
   catch (e) {
    console.log(e)
  }
}

function Search() {

    // useState para guardar las respuestas del servidor
    const [ultimo, setUltimo] = useState([])
    const [resto, setResto] = useState([])

    // ejecutamos la funcion de la peticion y guardamos la respuesta en los useState
    useEffect(() => {
      async function cargarApi () {
        const response = await peticionApi()
        if (response.status === 200) {
          setUltimo(response.data.pop())
          setResto(response.data)
        }
      }

      cargarApi()
    }, [])

    // validamos que si existe retorna el Modelo Carousel.
    const Complejos = () => {if(resto.length) {
      return (
        <Carousel ultimoComplejo={ultimo} restoComplejo={resto}/>
      )
    }}

    // fin de peticion.

    // UseState para los span del menu desp...
    const [Abrir, setAbrir] = useState(false)

    const Click = () => {
        return setAbrir(!Abrir)}

        
    // UseState para el contenedor oculto de buscar...   
    const [Open, setOpen] = useState(false)
    
    const Aparecer = () => {
      return setOpen(!Open)
    }

  return (
    <div className="AppSearch">
        <Menu 
            Abrir={Abrir}
            Click={Click}

            Aparecer={Aparecer}
        /> 

        <MenuOculto 
           Abrir={Abrir}
        />

        {Complejos()}

        <Buscar 
            Aparecer={Aparecer}  
        />
        
        <OcultoContenedorBuscar 
            Open={Open}
            Aparecer={Aparecer}
        />

    </div>
  );
}

export default Search;