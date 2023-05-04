import { useState, useRef } from "react"
import Menu from "./subContenedores/Menu/menuDesp.js";
import "./primerContenedor.css";
import "./subContenedores/Buscar/buscar.css";
import MenuOculto from "./subContenedores/Menu/menuOculto.js";
import img1 from "./img/imagen1.jpg"
import img2 from "./img/imagen2.jpg"
import styled from "styled-components"


function PrimerContenedor ({funcion}) {
    const [Abrir, setAbrir] = useState(false)

    const Click = () => {
        return setAbrir(!Abrir)
    }

    // Slide...

    const slideshow = useRef(null)
    
    const slideshowDeportes = useRef(null)

    const anterior = () => {
        if (slideshow.current.children.length > 0) {
            // obtenemos el ultimo elemento del slideshow.
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index]
            // obtenemos el ultimo elemento del slideshow.
            const indexDeporte = slideshowDeportes.current.children.length - 1;
            const ultimoElementoDeporte = slideshowDeportes.current.children[indexDeporte]

            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild)
            slideshowDeportes.current.insertBefore(ultimoElementoDeporte, slideshowDeportes.current.firstChild)

            slideshow.current.style.transition = `none`;
            slideshowDeportes.current.style.transition = `none`;

            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            const tamañoSlideDeportes = slideshowDeportes.current.children[0].offsetWidth;
            slideshowDeportes.current.style.transform = `translateX(-${tamañoSlideDeportes}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = `400ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;

                slideshowDeportes.current.style.transition = `400ms ease-out all`;
                slideshowDeportes.current.style.transform = `translateX(0)`;
            }, 30);
        }
    }

    const siguiente = () => {
        if(slideshow.current.children.length > 0) {
            // obtenemos el primer elemento del slideshow
            const primerElemento = slideshow.current.children[0];
            // obtenemos el primer elemento del slideshowDeportes
            const primerElementoDeportes = slideshowDeportes.current.children[0]

            //establecemos la transicion para el slideshow
            slideshow.current.style.transition = `400ms ease-out all`;
            //establecemos la transicion para el slideshowDeportes
            slideshowDeportes.current.style.transition = `400ms linear all`;

            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            const tamañoSlideDeportes = slideshowDeportes.current.children[0].offsetWidth;
            //movemos el slideshow
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
            //movemos el slideshowDeportes
            slideshowDeportes.current.style.transform = `translateX(-${tamañoSlideDeportes}px)`;

            const transicion = () => {
                // Reiniciamos la posicion del Slideshow
                slideshow.current.style.transition = `none`
                slideshow.current.style.transform = `translateX(0)`;
                // Reiniciamos la posicion del SlideshowDeportes
                slideshowDeportes.current.style.transition = `none`
                slideshowDeportes.current.style.transform = `translateY(0)`;
                // Tomamos el primer elemento y lo mandamos al final
                slideshow.current.appendChild(primerElemento);
                // Tomamos el primer elemento y lo mandamos al final
                slideshowDeportes.current.appendChild(primerElementoDeportes);

                slideshow.current.removeEventListener(`transitionend`, transicion )
                slideshowDeportes.current.removeEventListener(`transitionend`, transicion )
            }
            // EventListener para cuando termina la animacion(transicion)
            slideshow.current.addEventListener(`transitionend`, transicion)
            slideshowDeportes.current.addEventListener(`transitionend`, transicion)
        }
    }

    return (
        <div className="ContenedorSuperiorPrincipal"> 

        {/* // stard of menu modal */}
            <Menu 
                Abrir={Abrir}
                Click={Click}
            />
            <MenuOculto
                Abrir={Abrir}
            />
        {/* // end of menu modal */}  



            <div className="buscar-Contenedor">
                    <div className="deporte">
                        <div className="deporteS-Contenedor" ref={slideshowDeportes}>
                            <div><p>Futbol</p></div>
                            <div><p>Basquet</p></div>
                        </div>
                        <div className="flecha mover-izq" onClick={anterior}>
                            <ion-icon name="caret-back-outline"></ion-icon>
                        </div>
                        <div className="flecha mover-der" onClick={siguiente}>
                            <ion-icon name="caret-forward-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="ubi" onClick={funcion}>
                        <div className="icono-ubicacion">
                            <ion-icon name="location"></ion-icon>
                        </div>    
                        <p>Seleccionar ubicación</p>
                    </div>
            </div>


            <ContenedorSlideshow ref={slideshow}>
                <Slide>
                    <a> 
                        <img src={img2}></img> 
                    </a>
                </Slide>
                <Slide>
                    <a>
                        <img src={img1}></img> 
                    </a>
                </Slide>
            </ContenedorSlideshow>

        </div>
    )
}

// Slide...

const ContenedorSlideshow = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display : flex;
    flex-wrap: nowrap;
`
const Slide = styled.div`
    min-width: 100%;
    transition: .3s ease all;
    max-height: 100%;
  
    img {
        width: 100%;
        vertical-aling: top;
    }
`

export default PrimerContenedor