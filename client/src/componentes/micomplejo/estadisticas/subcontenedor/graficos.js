import "./graficos.css"
import "./graficos/estilos.css"

import Mensual from "./graficos/mensual"
import Semana from "./graficos/semana"
import Anual from "./graficos/anual"
import Horarios from "./graficos/horarios"
import Dias from "./graficos/dias"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

function Graficos () {
    return(
        <div className="graficos">
            <div className="Prev"><div className="Button Atras swiper-button-prev"></div></div>
            <Swiper
            navigation={{
                nextEl: ".Siguiente",
                prevEl: ".Atras"
            }}
            modules={[Navigation]}
            direction={'vertical'}
            className="mySwiper"
            >
                <SwiperSlide><Semana /></SwiperSlide>
                <SwiperSlide><Mensual /></SwiperSlide>
                <SwiperSlide><Anual /></SwiperSlide>
                <SwiperSlide><Horarios /></SwiperSlide>
                <SwiperSlide><Dias /></SwiperSlide>
            </Swiper>
            <div className="Next"><div className="Button Siguiente swiper-button-next"></div></div>
        </div>
    )
}

export default Graficos
