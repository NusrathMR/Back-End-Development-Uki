import express from "express";
import dotEnv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoutes from "../DataBase Express/routes"

dotEnv.config();

const app = express();
const PORT = process.env.PORT || 3030;
const MONGOURL = process.env.MONGOURL;

app.use(bodyParser.json());
app.use("/api/user",userRoutes)

mongoose.connect(MONGOURL).then(()=>{
    console.log("DataBase Connected Successfully...");
    app.listen(PORT, ()=>{
        console.log(`Server is running through ${PORT}`)
    })
})

.catch((error)=>{
    console.log('Database Connection failed:',error);
});



