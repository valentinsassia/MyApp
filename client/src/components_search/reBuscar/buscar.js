import "./buscar.css"

function Buscar ({Aparecer}) {
    return (
        <div className="buscar-contenedor_search">
            <div className="buscar_search" onClick={Aparecer}>
                <ion-icon name="chevron-up-outline"></ion-icon>
            </div>
        </div>
    )
}

export default Buscar