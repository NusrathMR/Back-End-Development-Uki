const express = require ("express");
const app = express();

app.get("/", (req,res) =>{
    res.send("hello");
});

app.get("/:id",(req,res) =>{
    const id = Number(res.params.id);

    const products = [{id:1, name:"Nusrath", age:19}, {id:2, name:"Athham", age:20}];

    const requestProducts = products.find((product) => product.id === id);
    res.json(requestProducts);

});



app.listen(3000, () =>{
    console.log("Server is running on http://localhost:3000/")
});