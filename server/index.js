// Archivo central donde juntamos el codigo express y mongoDB

import { connectDB } from "./db.js"
import { PORT } from "./config.js"

    // importamos el archivo "app", donde configuramos todo el express
    import app from "./app.js"

connectDB()

app.listen(PORT)
console.log("server in running port", PORT)