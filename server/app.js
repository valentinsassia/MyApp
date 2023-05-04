// Solo se encarga de configurar express

import express from "express"

    // importamos las rutas 
    import rutas from "./routes/locations.routes.js"
    
const app = express()

app.use(express.json())
app.use(rutas)

export default app

// se exporta al index, es para no acumular tanto codigo simplemente