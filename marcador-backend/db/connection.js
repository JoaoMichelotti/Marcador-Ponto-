import mongoose from "mongoose"
import "dotenv/config"

const endereco = process.env.MONGO_URI

await mongoose.connect(endereco)
console.log("BANCO DE DADOS EM FUNCIONAMENTO")
