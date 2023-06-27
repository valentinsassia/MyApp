import "./segundoContenedor.css";


function SegundoContenedor () {
    return (
        <div className="deslizar-Contenedor">
            <div className="deslizarDedo-Contenedor">
                <div className="deslizarDedo-Pelota"></div>
            </div>
            <div className="contenedordeslizardown">
                <ion-icon name="chevron-down-outline"></ion-icon>
                <img src="https://www.grupoorono.com.ar/themes/grupo-oronio/assets/images/curves/up.png"></img>
            </div>
        </div>
    )
}


export default SegundoContenedor