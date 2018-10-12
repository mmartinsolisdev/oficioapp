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
    Oficio.find({status: true}).sort('-_id').exec(callback);
}

module.exports.getOficio = function(id, callback){
    Oficio.findById(id).exec(callback);
}

module.exports.saveOficio = function (newOficio, callback){
    newOficio.save(callback);
}

module.exports.updateOficio = function (id, update, callback){
    Oficio.findByIdAndUpdate(id, update, callback);
}

module.exports.deleteOficio = function (id, callback){
    Oficio.findByIdAndDelete(id, callback);
}