'use strict';

const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    apellidos: String,
    email: String,
    contraseña: String,
    telefono: String,
    estado: String,
    ciudad: String,
    municipio: String,
    calle: String,
    colonia: String
});

const Usuario = module.exports = mongoose.model('Usuario', usuarioSchema);

module.exports.getUsuarios = function(callback){
    Usuario.find({status: true}).sort('-_id').exec(callback);
}

module.exports.getEmail = function(email, callback){
    Usuario.find({email: email},{email:1}, callback);
}

module.exports.saveUsuario = function (newUsuario, callback){
    newUsuario.save(callback);
}

module.exports.updateOficio = function (id, update, callback){
    Usuario.findByIdAndUpdate(id, update, callback);
}

module.exports.deleteUsuario = function (id, callback){
    Usuario.findByIdAndDelete(id, callback);
}