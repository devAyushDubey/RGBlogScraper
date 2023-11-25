import express from "express"
import "dotenv/config"
import router from './routes/index.js'
import cors from 'cors'
import mongoose from 'mongoose'

await mongoose.connect("mongodb://0.0.0.0:27017/rateGain")
console.log("MongoDB Connected.")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: '*'
  }));
app.use(router)

const PORT = process.env.PORT

app.listen(PORT , (err) => {
  if(err){
    console.log(err.toString())
  }else{
    console.log(`App is listening to port ` + PORT)
  }
});