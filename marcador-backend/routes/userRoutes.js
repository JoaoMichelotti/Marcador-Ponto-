import express from "express"

import userController from "../controllers/userController.js"

const userRouter = express.Router();

userRouter.get("/getallusers", userController.getAllUsers)
userRouter.post("/createuser", userController.createUser)
userRouter.post("/getuseremail", userController.getUserByEmail)

export default userRouter