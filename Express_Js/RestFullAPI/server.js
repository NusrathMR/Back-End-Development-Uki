import express from "express";
import dotEnv from "dotenv";
import connectDB from 'file:///C:/Users/MrnAh/OneDrive/Desktop/Dream%20Space/FullStack_Development/Back_End/Express_Js/RestFullAPI/config/db.js';
import bodyParser from "body-parser";

const app = express()
const PORT = process.env.PORT || 5000;

dotEnv.config();

app.use(bodyParser.json());

connectDB()


app.listen(PORT, ()=>{
    console.log(`Server is running through ${PORT}`);
});

