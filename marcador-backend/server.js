import express from "express"
import cors from "cors"
import userRouter from "./routes/userRoutes.js"
import recordRouter from "./routes/recordsRoutes.js"
import "./db/connection.js"


const app = express()

app.use(cors())

app.use(express.json())

app.use(userRouter)
app.use(recordRouter)
const PORT = process.env.PORT || 5000; // Use uma porta padrão ou a porta gerenciada pela Vercel

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});