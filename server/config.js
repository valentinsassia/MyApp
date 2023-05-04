import doteven from "dotenv"
doteven.config()

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/MyApp"
export const PORT = process.env.PORT || 4000