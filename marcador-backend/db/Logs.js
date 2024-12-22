import mongoose from "mongoose";

const registroSchema = new mongoose.Schema({
  hentrada: Date,
  hsaida: Date,
  data: Date,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});

const Registro = mongoose.model('Registro', registroSchema);

export { Registro }