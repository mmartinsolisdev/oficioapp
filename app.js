'use strict';
const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const mongoose = require ('mongoose');

const app = express();

// Usar este puerto si la app será alojada en Heroku
var port = process.env.PORT || 8080;
// Usar este puerto para desarrollo
// const port = 3000;

// CORS Middleware permite la conexion entre archivos
app.use(cors());

// Establecer carpeta
app.use(express.static(path.join(__dirname, 'public')))

// Body Parser Middleware permite la renderización de las vistas
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

//Headers necesarios para que el servidor node de accso a las peticiones no importando que cabeceras
/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });*/

// Index Route
app.get('/', (req,res) => {
    res.send('Endpoint invalido');
});

app.listen(port, () =>{
    console.log("Servidor escuchando en puerto "+port);
});