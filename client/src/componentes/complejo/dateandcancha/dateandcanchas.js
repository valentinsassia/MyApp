import "./dateandcanchas.css"

import { useContext, useState } from "react";
import { Contextos } from "../../../context" 

import io from "socket.io-client"
const socket = io("http://localhost:4000")

function DateAndCanchas () {

    const {fecha,setFecha} = useContext(Contextos)
    const {setHora} = useContext(Contextos)
    const {horarios} = useContext(Contextos)
    const {setDia} = useContext(Contextos)
    const {setHoraSeleccionada} = useContext(Contextos)

    const [Index, setIndex] = useState(0)

    let fechas = new Date()
    let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo" ]

        let dia1 = () => {
            setHora(horarios.dia1)
            setDia("dia1")
            setFecha(dias[fechas.getDay()] + " " + [fechas.getDate()])
            return "Hoy"
        }
        let dia2 = () => {
            setHora(horarios.dia2)
            setDia("dia2")
            setFecha(dias[fechas.getDay() + 1] + " " + [fechas.getDate() + 1])
            return "Mañana"
        }
        let dia3 = () => {
            setHora(horarios.dia3)
            setDia("dia3")
            setFecha(dias[fechas.getDay() + 2] + " " + [fechas.getDate() + 2])
            return fecha
        }
        let dia4 = () => {
            setHora(horarios.dia4)
            setDia("dia4")
            setFecha(dias[fechas.getDay() + 3] + " " + [fechas.getDate() + 3])
            return fecha
        }
        let dia5 = () => {
            setHora(horarios.dia5)
            setDia("dia5")
            setFecha(dias[fechas.getDay() + 4] + " " + [fechas.getDate() + 4])
            return fecha
        }
        let dia6 = () => {
            setHora(horarios.dia6)
            setDia("dia6")
            setFecha(dias[fechas.getDay() + 5] + " " + [fechas.getDate() + 5])
            return fecha
        }
        let dia7 = () => {
            setHora(horarios.dia7)
            setDia("dia7")
            setFecha(dias[fechas.getDay() + 6] + " " + [fechas.getDate() + 6])
            return fecha
        }

        let semana = [dia1, dia2, dia3, dia4, dia5, dia6, dia7]

    return (
        <div className="contenedorprincipal">
            <div className="contenedorCanchas">
                <p>Cancha 1</p>
            </div>

            <div className="contenedorDate">
                <div className="flechaIzq" onClick={() => {
                    if (Index >= 1) {
                        setHoraSeleccionada("false")
                        return setIndex(Index -1)
                    }
                }}>
                    <ion-icon name="caret-back-outline"></ion-icon>
                </div>
                <p>{semana[Index]()}</p>
                <div className="flechaDer" onClick={() => {
                    if (Index <= 5) {
                        setHoraSeleccionada("false")
                        return setIndex(Index + 1)
                    }
                }}>
                    <ion-icon name="caret-forward-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}

export default DateAndCanchas