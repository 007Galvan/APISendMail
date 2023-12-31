const express =  require("express");
const conexion = require ("./conexion/conexion")
const cors = require("cors");
const router = require("./router/routerCelulares")

const app = express();

conexion();

app.use(express.json())
//decodifica la informacion y la convierte en formato json//
app.use(express.urlencoded({extended:true}));

app.use(cors())

app.use('/public', express.static(`${__dirname}/src`))

app.use("/api", router)
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`corriendo en puerto ${port}`);
})