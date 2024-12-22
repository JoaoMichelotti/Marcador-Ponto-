import { usuario } from "../db/Users.js";
import jwt from "jsonwebtoken"

const getAllUsers = async (req, res) => {
  try {
      const users = await usuario.find();
      res.status(200).json(users);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {

      const existingUser = await usuario.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: "Email already exists!" });
      }

      const newUser = new usuario({
        name,
        email,
        password // Aqui você deve aplicar uma criptografia no password antes de salvar
     });
     await newUser.save(); // Salva o usuário no banco MongoDB
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
    const user = await usuario.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' }); // Retorna 404
    }


    
    const token = jwt.sign({id: user.id, email: user.email}, process.env.TOKEN_KEY, {
      expiresIn: "1h"
    })

    // Usuário encontrado
    return res.status(200).json({ message: 'Usuário encontrado', token, user: user._id });

  } catch (error) {
    console.error('Erro interno no servidor:', error);
    return res.status(500).json({ error: 'Erro interno no servidor' }); // Erro inesperado
  }
};
  
export default {getAllUsers, createUser, getUserByEmail}