import pool from "../db/connection.js";
import jwt from "jsonwebtoken"

const getAllUsers = async (req, res) => {
  try {
      const { rows } = await pool.query("SELECT * FROM users");
      res.status(200).json(rows);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      await pool.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3)", [name, email, password]);
      res.status(201).json({ message: "User created!" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

const getUserByEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'O campo email é obrigatório' });
  }

  try {
    // Consulta o banco
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' }); // Retorna 404
    }


    const user = rows[0];
    const token = jwt.sign({id: user.id, email: user.email}, process.env.TOKEN_KEY, {
      expiresIn: "1h"
    })

    // Usuário encontrado
    return res.status(200).json({ message: 'Usuário encontrado', token, user: user.id});

  } catch (error) {
    console.error('Erro interno no servidor:', error);
    return res.status(500).json({ error: 'Erro interno no servidor' }); // Erro inesperado
  }
};
  
export default {getAllUsers, createUser, getUserByEmail}