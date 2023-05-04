import "./dateandcanchas.css"

function DateAndCanchas () {
    return (
        <div className="contenedorprincipal">
            <div className="contenedorCanchas"></div>
            <div className="contenedorDate">
                <div className="flechaIzq">
                    <ion-icon name="caret-back-outline"></ion-icon>
                </div>
                <div className="flechaDer">
                    <ion-icon name="caret-forward-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}

export default DateAndCanchas