import "./MenuOpciones.css"

function OpcionesMenu (props) {

    return (
        <div className={`opciones-Menu_search ${props.Abrir ? `` : `displayNone_search`}`}>
            <p>{props.children}</p>
        </div>
    )
} 

export default OpcionesMenu