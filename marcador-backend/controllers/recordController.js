import pool from "../db/connection.js";

const createRecord = async (req, res) => {

    const { hentrada, hsaida, datahoje, id_user } = req.body;

    try {
      await pool.query("INSERT INTO usersLogs (hentrada, hsaida, data, user_id) VALUES ($1, $2, $3, $4)", [hentrada, hsaida, datahoje, id_user]);
      res.status(201).json({ message: "Record created!" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }


}

const getAllRecordsForAUser = async (req, res) => {

    const { id_user } = req.body;

    try {
        const{ rows } = await pool.query("select id, TO_CHAR(hentrada, 'HH24:MI') as hEntrada, TO_CHAR(hsaida, 'HH24:MI') AS hSaida, TO_CHAR(data, 'YYYY-MM-DD') AS data  from userslogs where user_id = $1", [id_user])
        res.status(200).json(rows)
    }
    catch(err){''
        res.status(500).json({ error: err.message })
    }
}

const updateRecord = async (req, res) => {

    const { hentrada, hsaida, datahoje, id_user } = req.body;

    try {
        await pool.query("UPDATE usersLogs SET hentrada = $1, hsaida = $2, data = $3 WHERE user_id = $4", [hentrada, hsaida, datahoje, id_user])
        res.status(200).json({ message: "Record updated!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const deleteRecord = async (req, res) => {

    const { id } = req.body;

    try {
        await pool.query("DELETE FROM usersLogs WHERE id = $1", [id]);
        res.status(200).json({ message: "Record deleted!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


export default {createRecord, getAllRecordsForAUser, updateRecord, deleteRecord}