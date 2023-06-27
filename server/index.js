// Archivo central donde juntamos el codigo express y mongoDB

import { connectDB } from "./db.js"
import { PORT } from "./config.js"

    // importamos el archivo "app", donde configuramos todo el express
    import server from "./app.js"

connectDB()

server.listen(PORT)
console.log("server in running port", PORT)