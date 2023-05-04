import axios from "axios"

export const obtenerApi = async (id_location) =>  await axios.get("/search/" + id_location)
