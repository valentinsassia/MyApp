import "./primerContenedor.css";
import "./subContenedores/Buscar/buscar.css";

import Menu from "./subContenedores/Menu/menuDesp.js";
import MenuOculto from "./subContenedores/Menu/menuOculto.js";
import img1 from "./img/imagen1.jpg"
import img2 from "./img/imagen2.jpg"

import { useState } from "react"

import { Autoplay, Pagination, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css"


function PrimerContenedor ({funcion}) {
    const [Abrir, setAbrir] = useState(false)

    const Click = () => {
        return setAbrir(!Abrir)
    }

    return (
        <div className="ContenedorSuperiorPrincipal"> 

            <div className="swiperimagenes">
                <Swiper 
                    modules={[Pagination, Autoplay, Navigation]}
                    autoplay={{
                        delay: 3500,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false,
                    }}
                    loop = {true}
                >
                    <SwiperSlide>
                        <img className="imagenes" src="https://www.quepasaweb.com.ar/wp-content/uploads/2020/10/cancha-futbol-5-autorizada-cuarentena.jpg"></img>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="imagenes" src="https://www.quepasaweb.com.ar/wp-content/uploads/2020/10/cancha-futbol-5-autorizada-cuarentena.jpg"></img>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* // stard of menu modal */}
                <Menu 
                    Abrir={Abrir}
                    Click={Click}
                />
                <MenuOculto
                    Abrir={Abrir}
                />
            {/* // end of menu modal */}  



            <div className="ubi" onClick={funcion}>
                <div className="icono-ubicacion">
                    <ion-icon name="location"></ion-icon>
                </div>    
                <p>Seleccionar ubicación</p>
            </div>
            
        </div>
    )
}

export default PrimerContenedor