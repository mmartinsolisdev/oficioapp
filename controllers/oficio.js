'use strict';
const Oficio = require('../models/oficio');

//Metodo que trae un oficio por ID
function getOficio(req, res) {
    var oficioID = req.params.id;
    res.status(200).send({ data: oficioID });
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
        console.log(newOficioSaved);
        if (err) {
            res.status(500).send({ message: 'Error al guardar el Oficio' });
        } else {
            res.status(200).send({ message: 'Oficio guardado correctamante' });
        }
    });
}

//Permite llamar a los metodos dentro del controlador
module.exports = {
    getOficio,
    saveOficio
}