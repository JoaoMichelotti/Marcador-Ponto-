import { Registro } from "../db/Logs.js";

const createRecord = async (req, res) => {
    const { hentrada, hsaida, datahoje, id_user } = req.body;

    if (!hentrada || !datahoje || !id_user) {
        return res.status(400).json({ error: "Required fields missing." });
    }

    try {
        const newLog = new Registro({
            hentrada: new Date(hentrada),
            hsaida: hsaida ? new Date(hsaida) : null,
            data: new Date(datahoje),
            user_id: id_user,
        });

        await newLog.save();

        res.status(201).json({ message: "Record created!" });
    } catch (err) {
        console.error("Erro ao criar o registro:", err.message);
        res.status(500).json({ error: "Failed to create record." });
    }
};



const getAllRecordsForAUser = async (req, res) => {

    const { id_user } = req.body;

    try {
        const registros = await Registro.find({ user_id: mongoose.Types.ObjectId(id_user) }).select(
            'hentrada hsaida data' // Seleciona somente os campos relevantes
          );
          
        if (registros.length === 0) {
            return res.status(404).json({ message: 'Nenhum registro encontrado para esse usuário' });
        }

        // Formata as datas de hentrada, hsaida e data
        const formattedRecords = registros.map((registro) => ({
            id: registro._id,
            hEntrada: registro.hentrada.toLocaleTimeString('pt-BR', { hour12: false }), // Formato HH:MM
            hSaida: registro.hsaida.toLocaleTimeString('pt-BR', { hour12: false }),
            data: registro.data.toISOString().split('T')[0], // Formato YYYY-MM-DD
        }));

        res.status(200).json(formattedRecords)
    }
    catch(err){
        res.status(500).json({ error: err.message })
    }
}

const updateRecord = async (req, res) => {

    const { hentrada, hsaida, datahoje, id_user } = req.body;

    try {
          // Converte os campos hentrada, hsaida e datahoje para Date, se necessário
        const updatedFields = {
            hentrada: new Date(hentrada), // Certifique-se que os campos são tratados como Date
            hsaida: new Date(hsaida),
            data: new Date(datahoje)
        };

         // Atualiza o registro no MongoDB usando o user_id (assumindo que é um ObjectId)
        const result = await Registro.updateOne(
            { user_id: mongoose.Types.ObjectId(id_user) }, // Filtra pelo user_id
            { $set: updatedFields } // Atualiza os campos
        );

        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: 'Nenhum registro encontrado ou nenhuma alteração realizada.' });
        }

        // Retorna sucesso na atualização
        return res.status(200).json({ message: 'Record updated!' });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const deleteRecord = async (req, res) => {
  const { id } = req.body;

  try {
    // Deleta o registro pelo ID do MongoDB
    const result = await Registro.deleteOne({ _id: mongoose.Types.ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Nenhum registro encontrado para deletar.' });
    }

    return res.status(200).json({ message: 'Record deleted!' });
  } catch (err) {
    console.error('Erro ao deletar o registro:', err);
    return res.status(500).json({ error: err.message });
  }
};


export default {createRecord, getAllRecordsForAUser, updateRecord, deleteRecord}