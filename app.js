const express = require("express")
const app = express()


require("dotenv").config()

app.use(express.static("public"))

app.set("views", __dirname + "/views")

app.set("view engine", "hbs")

app.use("/",require("./routes/index"))

app.listen(process.env.PORT, () => {
    console.log("Servidor activo")
})   