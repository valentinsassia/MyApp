import "./subContenedorOculto.css"

function OpcionesBuscar ({icono, Open, parrafo, onlyAgregarUbi}) {
    return (
        <>
            <div 
                className={Open ? `displayNone` : "buscar"}
                onClick={onlyAgregarUbi}
            >
                <div>
                    {icono}
                </div>
                <p>{parrafo}</p>
            </div>
            <span className={Open ? `displayNone` : "Span"}></span>
        </>
    )
}

export default OpcionesBuscar