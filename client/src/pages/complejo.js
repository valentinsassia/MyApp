import "./complejo.css"
import Horarios from "../components_complejos/horarios/horarios.js"
import DateAndCanchas from "../components_complejos/dateandcancha/dateandcanchas"
import { useEffect, useState } from "react";

// importamo lo necesario para el contexto
import { useContext } from "react";
import { Contextos } from "../context";

// importamos axios para realizar la peticion http
import axios from "axios";

// declaramos la funcion para reealizar la peticion 
async function peticionInfo () {
  try {
    const res = await axios.get("/La%20Esquina")
    return res
  }
   catch (e) {
    console.log(e)
  }
}

function Complejo () {

    // contexto
    const {horaSeleccionada} = useContext(Contextos)


    // useState para guardar las respuestas del servidor
    const [informacion, setInformacion] = useState([])


    // useState para los horarios
    const [Hora, setHora] = useState([])


    // ejecutamos la funcion de la peticion y guardamos la respuesta en los useState
    useEffect(() => {
      async function cargarInfo () {
        const res = await peticionInfo()
        if (res.status === 200) {
          setInformacion(res.data)
          setHora(res.data[0].horarios)
        } 
      }

      cargarInfo()
    }, [])


    // validamos y retornamos el nombre.
    const Nombre = () => {if(informacion.length) {
      return (
        <p>{informacion[0].nombre}</p>
      )
    }}


    // validamos y retornamos la hora.  
    const Time = () => {if(informacion.length) {
      return (
        <Horarios setTime = {setTime} Hora = {Hora}/>
      )
    }}


    // useState para clase del "contenedorsuperior"
    const [Select, setSelect] = useState(true)

    // useState para clase del "contenedorinferior", los horarios
    const [time, setTime] = useState(false)


    return (
        <div className="AppComplejos">
            <div className="contenedorsuperior">
                <div className={`reservar ${Select ? `seleccionado` : ``}`} onClick={() => {return (setSelect(true))}}><p>Reservar</p></div>
                <div className={`masInformacion ${Select ? `` : `seleccionado`}`} onClick={() => {return (setSelect(false))}}><p>Ver Más</p></div>
            </div>
            <div className="contenedorinferior">
                <div className={`subcontenedorMedio ${Select ? `` : `none`}`}>
                    <DateAndCanchas />
                    {Time()}
                    <div className={`boton ${time ? `botonSeleccionado` : ``}`} onClick={() => {
                      console.log(horaSeleccionada)
                    }}><p>Reservar</p></div>
                </div>
            </div>
        </div>
    )
}

export default Complejo