import pkg from 'pg';
const { Pool } = pkg;
import dotenv from "dotenv"

dotenv.config()

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT, // Adicione a porta se necessário
});

pool.connect((err, client, release) => {
    if (err) {
        console.error("Erro ao conectar ao PostgreSQL:", err.message);
        return;
    }
    console.log("Connected to PostgreSQL!");
    release();
});

export default pool;