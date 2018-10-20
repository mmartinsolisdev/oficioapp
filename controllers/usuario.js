'use strict';
const Usuario = require('../models/usuario');

//Metodo que trae todos los oficios
/*function getOficios(req, res) {
    Usuario.getUsuarios((err, oficios) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener los Oficios' });
        } else {
            res.status(200).send({ oficios });
        }
    });
}*/

//Metodo que busca un usuario por Email
function getEmail(req, res) {
    let usuarioEmail = req.params.email;
   // console.log('params = ' + usuarioEmail);
    Usuario.getEmail(usuarioEmail, (err, email) => {
        let emailEncontrado = email[0];
        //console.log(emailEncontrado);
        //console.log(Object.keys(email).length);
        if (err) {
            res.status(500).send({ message: 'Error al obtener el email', err });
        } else {
            if (Object.keys(email).length == 0 || emailEncontrado.email != usuarioEmail) {
                res.status(400).send({ message: 'Email disponible' });
            } else {
                res.status(200).send({ message: 'Email ya está en uso', email });
            }
        }
        //console.log(email)
    });
}

//Metodo que guarda un oficio
function saveUsuario(req, res) {
    let params = req.body;
    let usuario = new Usuario({
        nombre: params.nombre,
        apellidos: params.apellidos,
        email: params.email,
        contraseña: params.servicios,
        telefono: params.telefono,
        estado: params.estado,
        ciudad: params.ciudad,
        municipio: params.municipio,
        calle: params.calle,
        colonia: params.colonia
    });

    Usuario.saveUsuario(usuario, (err, newUsuarioSaved) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar el Oficio' });
        } else {
            res.status(200).send({ message: 'Usuario guardado correctamante', newUsuarioSaved });
        }
    });
}

//Metodo que actualiza un oficio por ID
/*function updateOficio(req, res) {
    let oficioID = req.params.id;
    let update = req.body;
    Oficio.updateOficio(oficioID, update, (err, oficioUpdated) => {
        if (err) {
            res.status(500).send({ message: 'Error al actualizar el oficio', err });
        } else {
            res.status(200).send({ oficioUpdated });
        }
    });
}*/

//Metodo que actualiza un oficio por ID
/*function deleteOficio(req, res) {
    let oficioID = req.params.id;
    Oficio.deleteOficio(oficioID, (err, oficioDeleted) => {
        if (err) {
            res.status(500).send({ message: 'Error al eliminar el oficio', err });
        } else {
            res.status(200).send({ message: 'El oficio '+oficioDeleted.titulo+' ha sido eliminado' });
        }
    });
}*/

//Permite llamar a los metodos dentro del controlador
module.exports = {
    //getOficios,
    getEmail,
    saveUsuario,
    //updateOficio,
    //deleteOficio
}