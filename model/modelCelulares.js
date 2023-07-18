const {Schema, model} = require("mongoose");



const celularSchema = Schema({
    imagen: {
        data: Buffer,
        contentType: String //image/jpeg o image/png etc...
    },
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: "Negro"
    },
    year: {
        type: Date,
        default:Date.now
    },
    precio: {
        type: Number,
        required: true
    },
    descripcion: {
        type:String,
        required: true
    }

})

module.exports=model("celular", celularSchema, "Celular");