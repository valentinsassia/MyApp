import "./subContenedorOculto.css"

function OpcionesBuscar ({icono, nombreClase, parrafo, onlyAgregarUbi}) {
    return (
        <div 
            className={nombreClase}
            onClick={onlyAgregarUbi}
        >
            <div>
                {icono}
            </div>
            <p>{parrafo}</p>
        </div>
    )
}

export default OpcionesBuscar