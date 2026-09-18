import express from "express";
import dotEnv from "dotenv";

dotEnv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use((req,res,next) =>{
    console.log(`URL path: ${req.path}`);
    console.log(`Header: ${req.headers}`);
    next();
})

app.get("/", (req,res) =>{
    console.log(`url: ${req.path}`);
    res.send("<h1> Home Page </h1>");
});

app.get("/about", (req,res) =>{
    console.log(`url: ${req.path}`);
    res.send("<h1> About Page </h1>");
});

app.use((req,res) =>{
    res.status(404).send("<h1>Page Not found</h1>")
})



app.listen(PORT, ()=>{
    console.log(`Server is running through ... ${PORT}`)
})