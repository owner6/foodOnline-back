import express from 'express'
import prisma from './src/lib/prisma.js'
import authRouter from './src/routes/auth.router.js'
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config(); 

const PORT = process.env.SERVER_PORT || 3000

const app = express()

app.use(cors())

app.use(express.json())

app.use("/auth", authRouter)

const start = async () => {
  await prisma.$connect();

  app.listen(PORT, () => console.log(`server started on port ${PORT}`))
}

start()
