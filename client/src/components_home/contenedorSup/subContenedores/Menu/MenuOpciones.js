import "./MenuOpciones.css"

function OpcionesMenu (props) {

    return (
        <div className={`opciones-Menu ${props.Abrir ? `` : `displayNone`}`}>
            <p>{props.children}</p>
        </div>
    )
} 

export default OpcionesMenu