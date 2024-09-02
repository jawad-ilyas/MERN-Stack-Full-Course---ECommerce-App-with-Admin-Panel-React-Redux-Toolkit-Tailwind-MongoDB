import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN || "*",
    methods : ['GET' , 'POST', 'DELETE', 'PUT']
}))
app.use(cookieParser())
app.use(express.static("public")) // ! public folder name | you can give or name (like a, b , c, d , e )
app.use(express.json())
app.use(express.urlencoded())


export { app }