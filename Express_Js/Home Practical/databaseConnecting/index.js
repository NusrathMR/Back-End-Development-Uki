import express from "express";
import nodemon from "nodemon";
import dotEnv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";

dotEnv.config();

const app =express();
const PORT = process.env.PORT;
const MONGOURL = process.env.MONGOURL;

app.use(bodyParser.json());

mongoose.connect(MONGOURL).then(()=>{
    console.log("Database connected successfully...");
    app.listen(PORT,()=>{
        console.log(`Server is running through ${PORT}`);
    })
}).catch((error)=>{
    console.log("Database connection failure...");
});
