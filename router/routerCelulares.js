const {Router} = require("express")
const celularC = require("../controller/CelularesController")


const router = Router();

router.get("/", celularC.mostrarTodo);
router.get("/hola", celularC.hola);
router.post("/",celularC.agregar);
router.post("/sendmail",celularC.sendmail);
router.get("/:key/:value", celularC.filtro);
router.put("/:key/:value/:img",celularC.editar);
router.delete("/:key/:value", celularC.eliminar);

module.exports=router 

