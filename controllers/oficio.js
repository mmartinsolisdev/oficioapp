'use strict';
const Oficio = require('../models/oficio');

//Metodo que trae todos los oficios
function getOficios(req, res) {
    Oficio.getOficios((err, oficios) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener los Oficios' });
        } else {
            res.status(200).send({ oficios });
        }
    });
}

//Metodo que trae un oficio por ID
function getOficio(req, res) {
    let oficioID = req.params.id;
    //console.log(oficioID);
    Oficio.getOficio(oficioID, (err, oficio) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener el oficio', err });
        } else {
            res.status(200).send({ oficio });
        }
    });
}
//Metodo que guarda un oficio
function saveOficio(req, res) {
    let params = req.body;
    let oficio = new Oficio({
        titulo: params.titulo,
        descripcion: params.descripcion,
        logo: params.logo,
        servicios: params.servicios,
        telefono: params.telefono,
        correo: params.ubicacion,
        ubicacion: params.ubicacion,
        status: params.status
    });

    Oficio.saveOficio(oficio, (err, newOficioSaved) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar el Oficio' });
        } else {
            res.status(200).send({ message: 'Oficio guardado correctamante', newOficioSaved });
        }
    });
}

//Metodo que actualiza un oficio por ID
function updateOficio(req, res) {
    let oficioID = req.params.id;
    let update = req.body;
    Oficio.updateOficio(oficioID, update, (err, oficioUpdated) => {
        if (err) {
            res.status(500).send({ message: 'Error al actualizar el oficio', err });
        } else {
            res.status(200).send({ oficioUpdated });
        }
    });
}

//Permite llamar a los metodos dentro del controlador
module.exports = {
    getOficios,
    getOficio,
    saveOficio,
    updateOficio
}