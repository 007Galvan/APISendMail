const express =  require("express");
const conexion = require ("./conexion/conexion")
const cors = require("cors");
const router = require("./router/routerCelulares")

const app = express();

conexion();

app.use(express.json())
//decodifica la informacion y la convierte en formato json//
app.use(express.urlencoded({extended:true}));

// const corsOptions = {
//     origin: 'https://railway.app/', // Replace with your actual client app's URL
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, // Enable credentials (cookies, authorization headers, etc.)
//   };


  
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://apisendmail-production.up.railway.app'); // Replace '*' with the specific origin(s) you want to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
  

//app.use(cors())

app.use('/public', express.static(`${__dirname}/src`))

app.use("/api", router)

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})