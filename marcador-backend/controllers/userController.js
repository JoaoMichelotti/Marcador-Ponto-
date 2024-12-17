import db from "../db/connection.js"

const getAllUsers = async (req, res) => {

    try {
        const [rows] = await db.query("select * from users")
        res.status(200).json(rows)
    }
    catch(err){
        res.status(500).json({ error: err.message })
    }

}

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      await db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, password]);
      res.status(201).json({ message: "User created!" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
export default {getAllUsers, createUser}