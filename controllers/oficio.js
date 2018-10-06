'use strict';
const Oficio = require('../models/oficio');

//Metodo que trae un oficio por ID
function getOficio(req, res){
    var oficioID = req.params.id;
    res.status(200).send({data: oficioID});
}
//Metodo que guarda un oficio
function saveOficio(req, res){
    var oficio = new Oficio();
    var params = req.body;

    oficio.titulo = params.titulo;
    oficio.descripcion = params.descripcion;
    oficio.logo = params.logo;
    oficio.servicios = params.servicios;

    
    res.status(200).send({favorito: params});
}

//Permite llamar a los metodos dentro del controlador
module.exports = {
    getOficio,
    saveOficio
}