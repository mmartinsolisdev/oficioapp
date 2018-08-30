'use strict';
const express = require ("express");

const app = express();

const port = 3000;

// Index Route
app.get('/', (req,res) => {
    res.send('Endpoint invalido');
});

app.listen(port, () =>{
    console.log("Servidor escuchando en puerto "+port);
});