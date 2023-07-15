import { useContext } from "react"
import { Contextos } from "../../../../context"

function Horasydias () {    

    const {setCondicion} = useContext(Contextos)

    return (
        <div className="horasydias">
            <p onClick={() => setCondicion("horasydias")}>Modificar horarios</p>
        </div>
    )
} 

export default Horasydias