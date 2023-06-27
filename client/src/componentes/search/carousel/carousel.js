import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css"
import M from "materialize-css";
import "./carousel.css"
import img1 from "../img/imagen1.jpg"
import {Link} from "react-router-dom"


export default function Carousel ({complejosCarrousel}) {

    useEffect(() => {
        var elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, {
            duration: 150,
            indicators: true
        });
    }, [])

        return (
           <div className="contenedor-principal_search contenedorprincipal">
             <div className='container Container'>
               <div className='row Row'>
                 <div className='col s12 Col'> 

                   <div className='carousel center-align Carousel'>
                                {complejosCarrousel.map(complejo => {
                                    return (
                                        <div className="carousel-item Carousel-item" key={complejo._id}>
                                            <img src={img1}></img>
                                            <div className="oscuroTransparente_search"></div>
                                            <p className="NombreComplejo">{complejo.nombre}</p>
                                            <p className="PrecioComplejo">Desde $8.500</p>
                                            <p className="UbicacionComplejo">Av. San Martin, Capitan Bermudez </p>
                                            <Link className="boton-vermas_search" to={`/${complejo.nombre}`}><p>Ver Más</p></Link>
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