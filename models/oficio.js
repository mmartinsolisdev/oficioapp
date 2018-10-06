'use strict';

const mongoose = require('mongoose');

const oficioSchema = mongoose.Schema({
    titulo: String,
    descripcion: String,
    logo: String,
    servicios: String,
    telefono: String,
    correo: String,
    ubicacion: String,
    status: boolean,
    IDdeUsuario: String
});

module.exports = mongoose.model('Oficio', oficioSchema);
