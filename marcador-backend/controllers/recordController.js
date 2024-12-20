import db from "../db/connection.js"

const createRecord = async (req, res) => {

    const { hentrada, hsaida, datahoje, id_user } = req.body;

    try {
      await db.query("INSERT INTO usersLogs (hentrada, hsaida, datahoje, id_user) VALUES (?, ?, ?, ?)", [hentrada, hsaida, datahoje, id_user]);
      res.status(201).json({ message: "Record created!" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }


}

const getAllRecordsForAUser = async (req, res) => {

    const { id_user } = req.body;

    try {
        const [rows] = await db.query("select id, time_format(hentrada, '%H:%i') as hEntrada, time_format(hsaida, '%H:%i') as hSaida, date(datahoje) as data from userslogs where id_user = ?", [id_user])
        res.status(200).json(rows)
    }
    catch(err){''
        res.status(500).json({ error: err.message })
    }
}

const updateRecord = async (req, res) => {

    const { hentrada, hsaida, datahoje, id_user } = req.body;

    try {
        await db.query("UPDATE usersLogs SET hentrada = ?, hsaida = ?, datahoje = ? WHERE id_user = ?", [hentrada, hsaida, datahoje, id_user]);
        res.status(200).json({ message: "Record updated!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const deleteRecord = async (req, res) => {

    const { id } = req.body;

    try {
        await db.query("DELETE FROM usersLogs WHERE id = ?", [id]);
        res.status(200).json({ message: "Record deleted!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


export default {createRecord, getAllRecordsForAUser, updateRecord, deleteRecord}