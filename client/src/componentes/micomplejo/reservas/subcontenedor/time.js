import "./time.css"

import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css";

import { useEffect, useContext } from "react";
import { Contextos } from "../../../../context";

function Time () {

    const {times} = useContext(Contextos) 

    useEffect(() => {
        var elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, {
            duration: 80,
            numVisible: 7,
            padding: 75,
        });
    }, [])

    return (
        <div className="contenedorCarousel">
            <div className='container'>
                <div className='row'>
                    <div className='col s12'>
                        <div className='carousel center-align'>
                            {times.map((valor, index) => {
                                let value = Object.values(valor).toString()
                                let keys = Object.keys(valor).toString()
                                return (
                                    <div className="carousel-item Width" key={index} >
                                        <div className={`contenedorHora ${value}`}>
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

export default Time