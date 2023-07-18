const modeloCelular = require("../model/modelCelulares") 


const saludar = ()=>{
    console.log('Hola');
}

const agregar =(req,res)=>{
    let info = req.body;
    const celular = new modeloCelular(info);  
    celular.save()
    .then((result) => {
        return res.status(200).send({
            message: "Celular agregado correctamente",
            status:"ok",
            result
        })
    }).catch((err) => {
        return res.status(404).send({
            message: "Error al agregar el celular",
            status:"Error",
            err
        })
    });
    
}

const mostrarTodo = (req,res)=>{
    modeloCelular.find().exec()
    .then((resultado) =>{
        if(!resultado){
            return res.status(202).send({
                mensaje:"No hay registros en la BD",
                status:"ok"
            })
        }
        return res.status(200).send({
            resultado
        })

    }).catch((err)=>{
        return res.status(404).send({
            mensaje:"Error al mostrar la informacion",
            status:"Error",
            err
        })
    });
}

const filtro = (req, res)=>{
    let consulta = {}
    consulta[req.params.key]=req.params.value;
    //console.log(consulta)
    modeloCelular.find(consulta)
    .then((resultado)=>{
        if(!resultado) res.status(202).send({mesaje:"No hay registro en la DB"})
        return res.status(200).send({
            status: "OK",
            resultado
        })

    }).catch ((e)=>{
        return res.status(404).send({
            status: "Error",
            e
        })
    })
}

const editar = (req,res)=>{
    let consulta = {}
    consulta[req.params.key]=req.params.value;
    let nuevo =  req.body
    console.log(consulta)
    console.log(nuevo)
    modeloCelular.findOneAndUpdate(consulta,nuevo,{new:true})
    .then((resul)=>{
        return res.status(200).send({
            mensaje:"Se actualizo de manera correcta",
            status:"OK",
            resul
        })
    }).catch((e)=>{
        return res.status(404).send({mensaje:"No se realizo la actualizacion del registro", e})
    })
}

const eliminar = (req,res)=>{
    let consulta = {}
    consulta[req.params.key]=req.params.value;
    //console.log(consulta)
    modeloCelular.deleteOne(consulta)
    .then((resul)=>{
        return res.status(200).send({
            mensaje:"Se elimino correctamente",
            status:"OK",
            resul
        })
    }).catch((e)=>{
        return res.status(404).send({mensaje:"No se realizo la eliminacion del registro", e})
    })
}

module.exports={
    saludar,
    agregar,
    mostrarTodo,
    filtro,
    editar,
    eliminar
}
