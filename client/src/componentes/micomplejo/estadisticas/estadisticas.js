import "./estadisticas.css"

import { useEffect, useState } from "react"
import axios from "axios";

function Estadisticas () {
    
    useEffect(() => {
        try {
            const Peticion = async () => await axios.post("/complejo/:nombre/estadisticas", {semana})
            Peticion()
            .then(res => {
                console.log(res.data)
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
    
    return (
        <div></div>
    )
} 

export default Estadisticas