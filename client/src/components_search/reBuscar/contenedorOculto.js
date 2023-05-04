import "./contenedorOculto.css"

function OcultoContenedorBuscar ({Open, Aparecer}) {
    return (
        <>
            <div className={`${Open ? `AparecerContenedor_search` : ``}`} onClick={Aparecer}></div>

            <div className={`Cerrado_search ${Open ? `Abierto_search` : ``}`}>
                <div className="icono-cerrar_search"><ion-icon name="chevron-down-outline"></ion-icon></div>
            </div>
        </>
    )
}

export default OcultoContenedorBuscar