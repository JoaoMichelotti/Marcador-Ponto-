import express from "express"
import cors from "cors"
import userRouter from "./routes/userRoutes.js"
import recordRouter from "./routes/recordsRoutes.js"

const app = express()

app.use(cors())

app.use(express.json())

app.use(userRouter)
app.use(recordRouter)
app.listen(5000, () => {
    console.log(`Server running on http://localhost:${5000}`)
})