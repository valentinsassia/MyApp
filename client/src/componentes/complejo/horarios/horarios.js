import "./horarios.css"

import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css";

import React, { useEffect } from "react";
import { useContext } from "react";
import { Contextos } from "../../../context" 


function Horarios () {

    const {hora} = useContext(Contextos)
    const {horaSeleccionada, setHoraSeleccionada} = useContext(Contextos)

    useEffect(() => {
        var elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, {
            duration: 80,
            numVisible: 5,
            padding: 65,
        });
    }, [])

    return (
        <div className="contenedorcarousel">
            <div className='container'>
                <div className='row'>
                    <div className='col s12'>
                        <div className='carousel center-align'>
                            {hora.map((valor, index) => {
                                let value = Object.values(valor).toString()
                                let keys = Object.keys(valor).toString()
                                return (
                                    <div className="carousel-item width" key={index} >
                                        <div className={`timecontenedor ${value} ${horaSeleccionada[1] == keys ? `horaseleccionada` : `` }`} onClick={
                                            () => {
                                                if (value == "true") {
                                                    setHoraSeleccionada(["true", keys])
                                                }
                                            }
                                        }>
                                            <p>{keys}</p>
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