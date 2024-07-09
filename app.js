const express = require("express")
const app = express();
const cors = require ('cors')


const api_routes = require("./routes/index")




// Middlewares

//CORS

app.use(cors())
// poder interpretar los datos que vienen en el body de una petición
app.use(express.json())

app.use("/api", 
api_routes)

module.exports = app;