import dotenv from "dotenv"
import { connectDb } from "./src/db/index.db.js"
import { app } from "./src/app.js"



dotenv.config({
    path: "./env"
})


app.get("/", (req, res) => {
    res.send("jawad mughal backend project ")
})

const portConfiguration = process.env.PORT || 3000
connectDb()
    .then(() => {
        app.on("error", (error) => {
            console.log("Error :: ", error)
        })
        app.listen(portConfiguration, () => {
            console.log(` http://localhost:${portConfiguration}`, portConfiguration)
        })

    })
    .catch(() => {
        console.log("index js :: connect db :: server listen error ")
    })