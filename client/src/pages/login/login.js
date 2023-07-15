import "./login.css"

import { useForm } from "react-hook-form"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { Contextos } from "../../context";
import { useContext, useEffect } from "react";
import { enCrypt, deCrypt } from "../../crypto";

function Login () {

    const navigate = useNavigate()

    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
       await axios.post("/login", data)
        .then((info) => {
            localStorage.setItem("email", enCrypt(data.email))
            localStorage.setItem("pass", enCrypt(data.contraseña))
            const informacion = info.data[0]
            setTimeout(()=>{
                navigate(`/complejo/${informacion.nombre}`)
            }, 1500)
        })
        .catch((e) => {
            console.log(e)
        })
    }

    return (
        <div className="contenedorLogin">

            <div onClick={() => navigate(-1)}><ion-icon name="arrow-back-outline"></ion-icon></div>
            <div className="contenedorForm">
                <form onSubmit={handleSubmit(onSubmit)} className="Form">
                    <div className="first">
                        <input type="text" name="email" autoComplete="off" {...register("email", {
                            required: true
                        })}></input>
                        <label> Email </label>
                    </div>
                    <div className="second">
                        <input type="password" name="contraseña" {...register("contraseña", {
                            required: true
                        })}></input>
                        <label> Contraseña </label>
                    </div>
                    <button className="sendFormulario" type="submit">
                        <p>Entrar</p>
                    </button>
                </form>
            </div>

            <div className="contenedorRegistrar">
                <p>¿Queres registrar tu complejo?</p>
                <span></span>
                <p>REGISTRAR</p>
            </div>
            
        </div>
    )
}

export default Login