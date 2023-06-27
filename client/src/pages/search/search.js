import './search.css';

import {useEffect, useState, useContext} from "react"
import { Contextos } from '../../context';
import {Link, useParams} from "react-router-dom"

import Carousel from '../../componentes/search/carousel/carousel';
import Menu from '../../componentes/search/Menu/menuDesp';
import MenuOculto from '../../componentes/search/Menu/menuOculto';

import axios from "axios";

async function peticionApi (ID) {
  try {
    const response = await axios.get(`/search/${ID}`)
    return response
  }
   catch (e) {
    console.log(e)
  }
}

function Search() {

    const params = useParams()
    const ID = params.id_location

    const {peticion} = useContext(Contextos)
    const {handleChange} = useContext(Contextos)
    const {dinamica} = useContext(Contextos)

    const {rebuscar, setRebuscar} = useContext(Contextos)

    const [complejosCarrousel, setComplejosCarrousel] = useState([])

    useEffect(() => {
      async function cargarApi () {
        const response = await peticionApi(ID)
        if (response.status === 200) {
          setComplejosCarrousel(response.data)
        }
      }

      peticion()

      cargarApi()
    }, [])

    const Complejos = () => {if(complejosCarrousel.length) {
      return (
        <Carousel complejosCarrousel={complejosCarrousel}/>
      )
    }}

    // UseState para los span del menu desp...
    const [Abrir, setAbrir] = useState(false)

    const Click = () => {
        return setAbrir(!Abrir)}

  return (
    <div className="AppSearch">
        <Menu 
            Abrir={Abrir}
            Click={Click}
        /> 

        <MenuOculto 
           Abrir={Abrir}
        />

        <div className={Abrir ? `cortina` : ""} onClick={() => setAbrir(false)}></div>

        <div className={rebuscar ? `rebuscaroculto` : ``}>
            <ion-icon name="chevron-down-outline" onClick={() => setRebuscar(false)}></ion-icon>
            <div className={rebuscar ? `contenedorformulario` : `displayNone`} >
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
                return <div 
                        key={dinamica.id} 
                        className={!rebuscar ? `displayNone` : `` || dinamica ? `contenedor_provincias` : `displayNone`}>
                            <Link to={`/search/${dinamica.id}`} onClick={() => setRebuscar(false)}><p>{dinamica.nombre + "," + " " + dinamica.provincia.nombre}</p></Link>
                       </div>
            })}
        </div>

        {Complejos()}

    </div>
  );
}

export default Search;