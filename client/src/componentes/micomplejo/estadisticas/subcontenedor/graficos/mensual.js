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

function Mensual () {

    const labels = ["Semana 1", "Semana 2", "Semana 3", "Semana 4"]

    let meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]

    const [Mes, setMes] = useState("0")
    const [MesAnterior, setMesAnterior] = useState("0")
    const [MesElegido, setMesElegido] = useState("0")

    const hoy = new Date()
    const mes = meses[hoy.getMonth()]

    const [value, setValue] = useState(new Date())

    useEffect(() => {
        try {
            socket.emit("mensual", [mes, true])
            socket.on("mensualRes", datos => {
                setMes(datos)
            })
            socket.on("mensualAnteriorRes", datos => {
                setMesAnterior(datos)
            })
            socket.on("mensualElegidoRes", datos => {
                setMesElegido(datos)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    const data = () => {
        if (Mes !== "0") {
            return {
                datasets: [
                    {
                        data: Mes,
                        backgroundColor: "rgb(75,192,192)",
                        hoverBackgroundColor: "#2a6d6d"
                    }
                ],
                labels
            };
        }
    }

    const bar = () => {
        if (Mes !== "0") {
            return <Bar data={data()} options={options} ></Bar>
        }
    }

    const dataMesAnterior = () => {
        if (MesAnterior !== "0") {
            return {
                datasets: [
                    {
                        data: MesAnterior,
                        backgroundColor: "rgb(75,192,192)",
                        hoverBackgroundColor: "#2a6d6d"
                    }
                ],
                labels
            };
        }
    }

    const barAnterior = () => {
        if (MesAnterior !== "0") {
            return <Bar data={dataMesAnterior()} options={options} ></Bar>
        }
    }

    const dataMesElegido = () => {
        if (MesElegido !== "0") {
            return {
                datasets: [
                    {
                        data: MesElegido,
                        backgroundColor: "rgb(75,192,192)",
                        hoverBackgroundColor: "#2a6d6d"
                    }
                ],
                labels
            };
        }
    }

    const barMesElegido = () => {
        if (MesElegido !== "0") {
            return <Bar data={dataMesElegido()} options={options} ></Bar>
        }
    }

    return (
        <div className='contenedorGraficos'>
            <Swiper
            navigation={{
                nextEl: ".siguiente",
                prevEl: ".atras"
            }}
            initialSlide={2}
            modules={[Navigation]}
            allowTouchMove={false}
            className="mySwiper"
            >   
                <SwiperSlide>
                    <div className='subcontenedorFecha'>
                        <div className="atras swiper-button-prev"></div>
                        <p>Elegir Mes</p>
                        <div className="siguiente swiper-button-next"></div>
                    </div>
                    {barMesElegido()}
                    <DatePicker value={value} onChange={(newValue) => {
                        setValue(newValue)
                        socket.emit("mensual", [value, null])
                        }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <div className='subcontenedorFecha'>
                        <div className="atras swiper-button-prev"></div>
                        <p>Mes Pasado</p>
                        <div className="siguiente swiper-button-next"></div>
                    </div>
                    {barAnterior()}
                </SwiperSlide>
                <SwiperSlide>
                    <div className='subcontenedorFecha'>
                        <div className="atras swiper-button-prev" onClick={() => { if (MesAnterior == "0") {socket.emit("mensual", [mes-1, false])}}}></div>
                        <p>Este Mes</p>
                        <div className="siguiente swiper-button-next"></div>
                    </div>
                    {bar()}
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Mensual