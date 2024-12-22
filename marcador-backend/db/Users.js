import mongoose from "mongoose";

const EsquemaUsuario = new mongoose.Schema({

    name: String,
    email: String,
    password: String
})

const usuario = mongoose.model("usuario", EsquemaUsuario)

export { usuario }