import express from "express"
import cors from "cors"
import userRouter from "./routes/userRoutes.js"

const app = express()

const PORT = process.env.PORT || 5000


app.use(cors())

app.use(express.json())

app.use(userRouter)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})