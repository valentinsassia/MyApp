import "./segundoContenedor.css";


function SegundoContenedor () {
    return (
        <div className="deslizar-Contenedor">
            <div className="deslizarDedo-Contenedor">
                <div className="deslizarDedo-Pelota"></div>
            </div>
            <div className="deslizarAbajo-Contenedor">
                <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
        </div>
    )
}


export default SegundoContenedor