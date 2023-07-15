import { Chart, registerables } from 'chart.js';
import { Line } from "react-chartjs-2" 
import { useEffect, useState } from "react";

import io from "socket.io-client"
const socket = io("http://localhost:4000")

Chart.register(...registerables)

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

function Anual () {

    const labels = ["E","F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"]

    const [Anual, setAnual] = useState("0")

    useEffect(() => {
        try {
            socket.emit("anual", año)
            socket.on("anualRes", datos => {
                setAnual(datos)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    const hoy = new Date()
    const año = hoy.getFullYear()

    const data = () => {
        if (Anual !== "0") {
            return {
                datasets: [
                    {
                        data: Anual,
                        backgroundColor: "rgb(75,192,192, 0.3)",
                        hoverBackgroundColor: "#2a6d6d",
                        tension: 0.2,
                        pointRadius: 4.3,
                        pointBackgroundColor: "rgb(75, 192, 192)",
                    }
                ],
                labels
            };
        }
    }

    const line = () => {
        if (Anual !== "0") {
            return <Line data={data()} options={options} ></Line>
        }
    }

    return (
        <div className='contenedorGraficos'>
            <div className='subcontenedorFecha top'>
                <p>Este Año</p>
            </div>
            {line()}
        </div>
    )
}

export default Anual