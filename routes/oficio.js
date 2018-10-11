'use strict';

const express = require('express');
const router = express.Router();
var oficioController = require('../controllers/oficio');

// Obtener un Oficio
router.get('/oficios', oficioController.getOficios);
router.get('/oficio/:id', oficioController.getOficio);
router.post('/oficio', oficioController.saveOficio);
router.put('/oficio/:id', oficioController.updateOficio);

// Index Route
router.get('/', (req, res) => {
    res.send('Endpoint invalido');
});

module.exports = router;