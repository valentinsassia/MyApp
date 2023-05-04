import "./home.css"
import PrimerContenedor from "../components_home/contenedorSup/primerContenedor";
import SegundorContenedor from "../components_home/contenedorMedio/segundoContenedor";
import TercerContenedor from "../components_home/contenedorInferior/tercerContenedor";
import ContenedorOculto from '../components_home/contenedorSup/subContenedores/contenedorOculto/contenedorOculto';
import { useState } from "react"

// importamos el useContext, y el Contexto para modificar el useState de este modulo
import { useContext } from "react";
import { Contextos } from "../context";

function Home () {

    const {setContexto, Contexto} = useContext(Contextos)

    const [OpenContenedor, setOpenContenedor] = useState(false)

    const Clicked = () => {
        if (Contexto) {
            setContexto(false)
        }
        else setContexto(true)
        return setOpenContenedor(!OpenContenedor)
    }

    return (
        <div className="App">

            <PrimerContenedor 
                funcion = {Clicked}
            />

            <SegundorContenedor />

            <TercerContenedor />

        {/* Es parte del contenedor superior */}
            <ContenedorOculto 
                condicion = {OpenContenedor}
                close = {Clicked}
            />

            <div
                className={`${OpenContenedor ? `contenedor-Invisible-Transparente` : ``}`}
                onClick={Clicked}>
            </div>

        </div>
    )
}

export default Home