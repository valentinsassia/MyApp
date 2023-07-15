import { useContext } from "react"
import { Contextos } from "../../../../context"

function Canchas () {    

    const {setCondicion} = useContext(Contextos)
    
    return (
        <div className="canchas">
            <p onClick={() => setCondicion("canchas")}>Modificar canchas</p>
        </div>
    )
} 

export default Canchas