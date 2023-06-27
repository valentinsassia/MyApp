import "./confirmarReserva.css"

import { useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react";
import { Contextos } from "../../context";

import io from "socket.io-client"

const socket = io("http://localhost:4000")

function ConfirmarReserva () {

  const params = useParams()

  const hora = params.horaseleccionada
  const nombre = params.nombre
  const {dia} = useContext(Contextos)
  const {fecha} = useContext(Contextos)

  const {acceso} = useContext(Contextos)
  const navigate = useNavigate()

  useEffect(() => {
    if (!acceso) {
      return navigate("/")
    }
  }, [])

  if (acceso) {
    return (
      <div className="appConfirmar">
        <div onClick={() => navigate(-1)}>
            <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <p className="faltapoco">¡Falta Poco!</p>
        <div className="contenedorconfirmar">
            <p className="primario">{nombre}</p>
            <p className="secundario">Fecha:</p>
            <p className="tercero">{fecha}</p>
            <span></span>
            <p className="secundario">Horario:</p>
            <p className="tercero">{hora}</p>
            <span></span>
            <p className="secundario">Duracion:</p>
            <p className="tercero">60 Minutos</p>
            <span></span>
            <p className="secundario">Cancha:</p>
            <p className="tercero">Cancha 1 - Descubierta</p>
            <span></span>
            <p className="secundario">Precio:</p>
            <p className="tercero">...</p>
            <span></span>
            <p className="secundario">Seña / Adelanto:</p>
            <p className="tercero">...</p>
        </div>
          <div className="confirmar" onClick={
            ()=>{
              socket.emit("modificar", {nombre, hora, dia})
             }}>
              <p>Confirmar</p>
          </div>
      </div>
  )
  } 
}

export default ConfirmarReserva