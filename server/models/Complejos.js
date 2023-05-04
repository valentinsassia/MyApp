// Los esquemas de la base de datos

import mongoose from "mongoose"

const complejos = new mongoose.Schema({
    name: {
        type: String
    },
    id_location: {
        type: String
    }
})

export default mongoose.model("complejos", complejos)