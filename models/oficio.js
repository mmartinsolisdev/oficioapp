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
    status: Boolean
});

module.exports = mongoose.model('Oficio', oficioSchema);

module.exports.getOficio = function(id, callback){
    Inscripcion.findById(id, callback);
}

module.exports.saveOficio = function (oficio, callback){
    oficio.save(callback);
}
