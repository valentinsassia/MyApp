import "./horarios.css"
import React, { useEffect, useState } from "react";
import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css";

import { useContext } from "react";
import { Contextos } from "../../context";


function Horarios ({setTime, Hora}) {
    // contexto
    const {setHoraSeleccionada} = useContext(Contextos)

    // para el className 
    const [cambiarColor, setCambiarColor] = useState()

    useEffect(() => {
        var elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, {
            duration: 150,
            numVisible: 5,
            padding: -80,
        });
    }, [])

    return (
            <div className="contenedorcarousel">
                <div className='container'>
                    <div className='row'>
                        <div className='col s12'>
                            <div className='carousel center-align'>

                                {Hora.map((Hora, index) => {
                                    return (
                                        <div className="carousel-item" key={index}>
                                            <div className={`timecontenedor ${cambiarColor == Hora ? `horaseleccionada` : ``}`} onClick={() => {
                                                    // Para cambiar la clase
                                                    setCambiarColor(Hora)
                                                    // Contexto
                                                    setHoraSeleccionada(Hora)
                                                    // este "setTime", es para activar el boton cuando seleccionamos una hora
                                                    setTime(true)
                                                }
                                                    }>
                                                <p>{Hora}</p>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Horarios