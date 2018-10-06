'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./config/db');
var api = require('./routes/oficio');

const app = express();

// Conexion a la base de datos
mongoose.connect(config.database, { useNewUrlParser: true }).then(
    () => {
        console.log('Conectado a la base de datos ' + config.database)
        app.listen(port, () => {
            console.log("Servidor escuchando en puerto " + port);
        });
    },
    err => { console.log('Error de conexion ' + err) }
);


// Usar este puerto si la app será alojada en Heroku
var port = process.env.PORT || 8080;
// Usar este puerto para desarrollo
// const port = 3000;

// CORS Middleware permite la conexion entre archivos
app.use(cors());

// Establecer carpeta
app.use(express.static(path.join(__dirname, 'public')))

// Body Parser Middleware permite la renderización de las vistas
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Headers necesarios para que el servidor node de accso a las peticiones no importando que cabeceras
/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });*/

app.use('/api', api);