import "./imagenes.css"

import { useContext } from "react"
import { Contextos } from "../../../context"

import { Autoplay, Pagination, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css"

function Imagenes () {

    const {informacion} = useContext(Contextos)
    const img = informacion.imagenes

    return (
        <div className="swiperContenedor">
            <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: ".pagination",
                    clickable: true,
                    dynamicBullets: true
                }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }}
                loop = {true}
            >
                {img.map((imagen) => {
                    return(
                        <SwiperSlide>
                            <img src={imagen}></img>
                        </SwiperSlide>
                    )
                })}
                <div className="pagination"></div>
                <div className="button swiper-button-next"></div>
                <div className="button swiper-button-prev"></div>
            </Swiper>
        </div>
    )
}

export default Imagenes