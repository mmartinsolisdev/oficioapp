'use strict';

const express = require('express');
const router = express.Router();
var oficioController = require('../controllers/oficio');

// Obtener un Oficio
router.get('/oficio/:id', oficioController.getOficio);
router.post('/oficio', oficioController.saveOficio);

// Index Route
router.get('/', (req, res) => {
    res.send('Endpoint invalido');
});

module.exports = router;