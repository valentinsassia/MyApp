import { Bar } from "react-chartjs-2" 
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { DatePicker } from "@mui/x-date-pickers"

import io from "socket.io-client"
const socket = io("http://localhost:4000")

const options = {
    responsive:true,
    fill: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        x: {
            grid: {
                display: false
            }
        },
    }
};

function Semana () {

    const labels = ["D","L", "M", "M", "J", "V", "S"]

    const [Semana, setSemana] = useState("0")
    const [SemanaAnterior, setSemanaAnterior] = useState("0")
    const [SemanaElegida, setSemanaElegida] = useState("0")

    const [value, setValue] = useState(new Date())

    useEffect(() => {
        try {
            socket.emit("semana", [semana, true])
            socket.on("semanaRes", datos => {
                setSemana(datos)
            })
            socket.on("semanaAnteriorRes", datos => {
                setSemanaAnterior(datos)
            })
            socket.on("semanaElegidaRes", datos => {
                setSemanaElegida(datos)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    const numeroDeSemana = fecha => {
        const DIA_EN_MILISEGUNDOS = 1000 * 60 * 60 * 24,
            DIAS_QUE_TIENE_UNA_SEMANA = 7,
            JUEVES = 4;
        fecha = new Date(Date.UTC(fecha.getFullYear(), fecha.getMonth(), fecha.getDate()));
        let diaDeLaSemana = fecha.getUTCDay(); // Domingo es 0, sábado es 6
        if (diaDeLaSemana === 0) {
            diaDeLaSemana = 7;
        }
        fecha.setUTCDate(fecha.getUTCDate() - diaDeLaSemana + JUEVES);
        const inicioDelAño = new Date(Date.UTC(fecha.getUTCFullYear(), 0, 1));
        const diferenciaDeFechasEnMilisegundos = fecha - inicioDelAño;
        return Math.ceil(((diferenciaDeFechasEnMilisegundos / DIA_EN_MILISEGUNDOS) + 1) / DIAS_QUE_TIENE_UNA_SEMANA);
    };

    const hoy = new Date()
    const semana = numeroDeSemana(hoy)

    const data = () => {
        if (Semana !== "0") {
            return {
                datasets: [
                    {
                        data: Semana,
                        backgroundColor: "rgb(75,192,192)",
                        hoverBackgroundColor: "#2a6d6d"
                    }
                ],
                labels
            };
        }
    }

    const bar = () => {
        if (Semana !== "0") {
            return <Bar data={data()} options={options} ></Bar>
        }
    }

    const dataAnterior = () => {
        if (SemanaAnterior !== "0") {
            return {
                datasets: [
                    {
                        data: SemanaAnterior,
                        backgroundColor: "rgb(75,192,192)",
                        hoverBackgroundColor: "#2a6d6d"
                    }
                ],
                labels
            };
        }
    }

    const barAnterior = () => {
        if (SemanaAnterior !== "0") {
            return <Bar data={dataAnterior()} options={options} ></Bar>
        }
    }

    const dataElegida = () => {
        if (SemanaElegida !== "0") {
            return {
                datasets: [
                    {
                        data: SemanaElegida,
                        backgroundColor: "rgb(75,192,192)",
                        hoverBackgroundColor: "#2a6d6d"
                    }
                ],
                labels
            };
        }
    }

    const barElegido = () => {
        if (SemanaElegida !== "0") {
            return <Bar data={dataElegida()} options={options} ></Bar>
        }
    }

    return (
        <div className='contenedorGraficos'>
            <Swiper
            navigation={{
                nextEl: ".next",
                prevEl: ".back"
            }}
            initialSlide={2}
            modules={[Navigation]}
            allowTouchMove={false}
            className="mySwiper"
            >   
                <SwiperSlide>
                    <div className='subcontenedorFecha'>
                        <div className="back swiper-button-prev"></div>
                        <p>Elegir Semana</p>
                        <div className="next swiper-button-next"></div>
                    </div>
                    {barElegido()}
                    <DatePicker value={value} onChange={(newValue) => {
                        setValue(newValue)
                        socket.emit("semana", [value, null])
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <div className='subcontenedorFecha'>
                        <div className="back swiper-button-prev"></div>
                        <p>Semana Pasada</p>
                        <div className="next swiper-button-next"></div>
                    </div>
                    {barAnterior()}
                </SwiperSlide>
                <SwiperSlide>
                    <div className='subcontenedorFecha'>
                        <div className="back swiper-button-prev" onClick={() => { if (SemanaAnterior == "0") {socket.emit("semana", [semana -1, false])}}}></div>
                        <p>Esta Semana</p>
                        <div className="next swiper-button-next"></div>
                    </div>
                    {bar()}
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Semana