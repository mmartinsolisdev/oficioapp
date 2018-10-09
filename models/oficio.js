'use strict';

const mongoose = require('mongoose');

const oficioSchema = new mongoose.Schema({
    titulo: String,
    descripcion: String,
    logo: String,
    servicios: String,
    telefono: String,
    correo: String,
    ubicacion: String,
    status: Boolean
});

const Oficio = module.exports = mongoose.model('Oficio', oficioSchema);

module.exports.getOficios = function(callback){
    Oficio.find({}, callback);
}

module.exports.saveOficio = function (newOficio, callback){
    newOficio.save(callback);
}
