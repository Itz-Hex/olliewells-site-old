// Import express, controller & router
const express = require('express');
const servicesController = require('../controllers/services.controller.js');
const router = express.Router();

router.get('/services', servicesController.getServices);
// router.post('/services/calculate', servicesController.postServices);

module.exports = router;
