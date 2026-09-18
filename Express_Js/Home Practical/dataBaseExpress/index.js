import express from "express";
import nodemon from "nodemon";
import dotEnv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoutes from "../dataBaseExpress/route";

dotEnv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGOURL;

app.use(bodyParser.json());
app.use("/api/user",userRoutes);

mongoose.connect(MONGOURL).then(()=>{
    console.log("Databases connected successfully...");
    app.listen(PORT,()=>{
        console.log(`Server is running through ${PORT}`);
    })
}).catch((error)=>{
    console.log('Database connection failure...');
});