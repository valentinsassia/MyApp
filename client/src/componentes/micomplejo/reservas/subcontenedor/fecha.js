import "./fecha.css"

import { useState } from "react"

import { useContext } from "react";
import { Contextos } from "../../../../context";

function Fecha ({horas}) {

    const {setTimes} = useContext(Contextos)

    const [Index, setIndex] = useState(0)

    let fechas = new Date()
    let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo" ]

    let dia1 = () => {
        setTimes(horas.dia1)
        return "Hoy"
    }
    let dia2 = () => {
        setTimes(horas.dia2)
        return "Mañana"
    }
    let dia3 = () => {
        setTimes(horas.dia3)
        return dias[fechas.getDay() + 2] + " " + [fechas.getDate() + 2]
    }
    let dia4 = () => {
        setTimes(horas.dia4)
        return dias[fechas.getDay() + 3] + " " + [fechas.getDate() + 2]
    }
    let dia5 = () => {
        setTimes(horas.dia5)
        return dias[fechas.getDay() + 4] + " " + [fechas.getDate() + 2]
    }
    let dia6 = () => {
        setTimes(horas.dia6)
        return dias[fechas.getDay() + 5] + " " + [fechas.getDate() + 2]
    }
    let dia7 = () => {
        setTimes(horas.dia7)
        return dias[fechas.getDay() + 6] + " " + [fechas.getDate() + 2]
    }

    let semana = [dia1, dia2, dia3, dia4, dia5, dia6, dia7]

    return (
        <div className="subcontenedorFecha">
            <ion-icon name="chevron-back-outline" onClick={() => {
                if (Index >= 1) {
                    return setIndex(Index -1)
                }
            }} />
            <p>{semana[Index]()}</p>
            <ion-icon name="chevron-forward-outline" onClick={() => {
                if (Index <= 5) {
                    return setIndex(Index + 1)
                }
            }}/>
        </div>
    )
}

export default Fecha