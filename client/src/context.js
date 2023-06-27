import { useState, createContext, useContext } from "react";

export const Contextos = createContext()

export const Contexto = ({children}) => {

    // contexto para desaparecer pie de pagina.
    const [Contexto, setContexto] = useState(true)

    // Guardamos la informacion pedidas al backen sobre el complejo
    const [informacion, setInformacion] = useState()

    // Guardar las horas pedidas al backend
    const [horarios, setHorarios] = useState()

    // enviamos todas las horas dependiendo el dia
    const [hora, setHora] = useState([])

    // fecha ej: "Miercoles 14"
    const [fecha, setFecha] = useState("")

    // ej: "dia3"
    const [dia, setDia] = useState()

    // la hora seleccionada la guardamos en este useState
    const [horaSeleccionada, setHoraSeleccionada] = useState("false")

    // abrir contenedor de rebuscar en la pagina 2
    const [rebuscar, setRebuscar] = useState(false)


    // contextoS para guardar api de las ciudades y sus useState 
    const peticion = async () => { 
        if (!estatica.length) {
        await fetch("https://apis.datos.gob.ar/georef/api/municipios?&max=5000")
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => { 
            setEstatica(json.municipios)
        })
        .catch(error => console.log(error))
    }
    }

    const [estatica, setEstatica] = useState([])
    const [dinamica, setDinamica] = useState([])
    const [busqueda, setBusqueda] = useState("")

    const filtrar = (terminoDeBusqueda) => {
        var ResultadosBusqueda = estatica.filter((elemento)=>{
            if (terminoDeBusqueda < 1) {
                return false
            }
            else if(elemento.nombre.toString().normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(terminoDeBusqueda.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase())){
                return elemento;
            }
        });
        setDinamica(ResultadosBusqueda)
    }

    const handleChange = e => {
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }


    // Pagina "MiComplejo"
    const [times, setTimes] = useState([])

    // Use para proteger las rutas 
    const [acceso, setAcceso] = useState(false)

    // Use para abrir "ContenedorDeslizanteOculto"
    const [deslizar, setDeslizar] = useState(false)

    // Use para "reservar y ver mas", en "complejo.js"
    const [seleccionado, setSeleccionado] = useState(true)

    return <Contextos.Provider value={{
        fecha, setFecha,
        hora, setHora,
        informacion, setInformacion,
        horarios, setHorarios,
        Contexto, setContexto,
        horaSeleccionada, setHoraSeleccionada,
        dia, setDia,
        estatica, setEstatica, dinamica,setDinamica,busqueda,setBusqueda, filtrar, handleChange, peticion,
        times, setTimes,
        acceso, setAcceso,
        deslizar, setDeslizar,
        seleccionado, setSeleccionado,
        rebuscar, setRebuscar
    }}>
        {children}
    </Contextos.Provider>
}