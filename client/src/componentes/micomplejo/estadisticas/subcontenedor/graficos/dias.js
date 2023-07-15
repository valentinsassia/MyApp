import { Bar } from "react-chartjs-2" 
import { useEffect, useState } from "react";

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

function Dias () {

    const labels = ["D","L", "M", "M", "J", "V", "S"]

    const [dias, setDias] = useState("0")

    useEffect(() => {
        try {
            socket.emit("dias")
            socket.on("diasRes", datos => {
                setDias(datos)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    const data = () => {
        if (dias !== "0") {
            return {
                datasets: [
                    {
                        data: dias,
                        backgroundColor: "rgb(75,192,192)",
                        hoverBackgroundColor: "#2a6d6d"
                    }
                ],
                labels
            };
        }
    }

    const bar = () => {
        if (dias !== "0") {
            return <Bar data={data()} options={options} ></Bar>
        }
    }

    return (
        <div className='contenedorGraficos'>
            <div className='subcontenedorFecha'>
                <p>Dias Mas Demandados</p>
            </div>
            {bar()}
        </div>
    )
}

export default Dias