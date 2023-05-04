import { useState, createContext } from "react";

export const Contextos = createContext()

export const Contexto = ({children}) => {

    // contexto para desaparecer pie de pagina.
    const [Contexto, setContexto] = useState(true)

    // contexto para saber la hora que se preciono en "horarios.js"
    const [horaSeleccionada, setHoraSeleccionada] = useState()

    return <Contextos.Provider value={{
        Contexto, setContexto,
        horaSeleccionada, setHoraSeleccionada
    }}>
        {children}
    </Contextos.Provider>
}