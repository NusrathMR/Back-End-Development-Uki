const express = require("express");
const app = express();

app.get("/Name/:nameId/age/:ageId",(req,res) =>{
    app.send(`Name: ${req.params.name}, Age: ${req.param.age}`);
})

app.listen(3030, () =>{
    console.log("Server is runnig through http://localhost:3030/");
});