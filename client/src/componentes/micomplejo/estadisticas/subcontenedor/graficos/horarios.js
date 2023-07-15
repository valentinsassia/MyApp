import { useEffect, useState } from "react"
import { Bar } from "react-chartjs-2" 

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

function Horarios () {

    const [horarios, setHorarios] = useState("0")

    useEffect(() => {
        try {
            socket.emit("horarios")
            socket.on("horariosRes", datos => {
                setHorarios(datos)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    let labels = horarios.horariosReducidos

    const data = () => {
        if (horarios !== "0") {
            return {
                datasets: [
                    {
                        data: horarios.Total,
                        backgroundColor: "rgb(75,192,192)",
                        hoverBackgroundColor: "#2a6d6d"
                    }
                ],
                labels
            };
        }
    }

    const bar = () => {
        if (horarios !== "0") {
            return <Bar data={data()} options={options} ></Bar>
        }
    }

    return (
        <div className='contenedorGraficos'>
        <div className='subcontenedorFecha'>
            <p>Horas Mas Reservadas</p>
        </div>
        {bar()}
    </div>
    )
}

export default Horarios