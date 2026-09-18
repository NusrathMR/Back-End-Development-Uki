const express = require("express");
const app = express();

app.get("/author/:authorID/book/:bookID", (req,res) => {
    res.send(`Book author:${req.params.authorID}, Book Name: ${req.params.bookID}`);
})

app.listen(3030, ()=>{
    console.log("server is running through the port http://localhost:3030/");
})