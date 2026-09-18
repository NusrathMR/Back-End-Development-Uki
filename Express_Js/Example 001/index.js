const express = require("express");
const app = express();
const port = 8080;

app.get('/', (req, res) =>{
    res.send('Helo world from Express');
})

app.listen(port, () => {
    console.log(`Server running on local host: ${port}`);
});