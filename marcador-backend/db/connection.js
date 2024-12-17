import mysl from "mysql2"
import dotenv from "dotenv"

dotenv.config()

const db = mysl.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.getConnection((err, connection) => {
    if (err) {
        console.error("Erro ao conectar ao MySQL:", err.message);
        return;
      }
      console.log("Connected to MySQL!");
});

export default db.promise();