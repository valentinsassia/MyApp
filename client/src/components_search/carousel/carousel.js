import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css";
import "./carousel.css"
import img1 from "../img/imagen1.jpg"
import {Link} from "react-router-dom"


export default function Carousel ({ultimoComplejo, restoComplejo}) {

    useEffect(() => {
        var elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, {
            duration: 150,
        });
    }, [])

        return (
           <div className="contenedor-principal_search">
                <div className='container'>
                    <div className='row'>
                        <div className='col s12'> 

                            <div className='carousel center-align'>

                                {restoComplejo.map(complejo => {
                                    return (
                                        <div className="carousel-item" key={complejo._id}>
                                            <img src={img1}></img>
                                            <div className="oscuroTransparente_search"></div>
                                            <p>{complejo.nombre}</p>
                                            <Link className="boton-vermas_search" to={`/${complejo.nombre}`}><p>Ver Más</p></Link>
                                        </div>
                                    )
                                })}
                                         <div className="carousel-item" key={ultimoComplejo._id}>
                                            <img src={img1}></img>
                                            <div className="oscuroTransparente_search"></div>
                                            <p>{ultimoComplejo.nombre}</p>
                                            <Link className="boton-vermas_search" to={`/${ultimoComplejo.nombre}`}><p>Ver Más</p></Link>
                                        </div>
                                
                            </div>
                        

                        </div>
                    </div>
                </div>
            </div>  
        )
}