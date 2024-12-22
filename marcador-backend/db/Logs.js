import mongoose from "mongoose";

const registroSchema = new mongoose.Schema({
  hentrada: String,
  hsaida: String,
  data: Date,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});

const Registro = mongoose.model('Registro', registroSchema);

export { Registro }