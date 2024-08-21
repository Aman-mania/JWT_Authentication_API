import dotenv from 'dotenv'
dotenv.config();

import express from 'express'
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'

import connectDB from './config/connectdb.js'

const app=express()
const port=process.env.PORT
const URL=process.env.DATABASE_URL

app.use(cors())

connectDB(URL);

app.use(express.json())

app.use("/api/user",userRoutes);

app.listen(port,()=>
[
    console.log(`Server running at ${port}`)
])