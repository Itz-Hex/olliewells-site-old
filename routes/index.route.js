// Import express, controller & router
const express = require('express');
const indexController = require('../controllers/index.controller.js');
const router = express.Router();

router.get('/', indexController.getHome);
router.get('/home', indexController.getHome);
router.get('/about', indexController.getAbout);
router.get('/portfolio', indexController.getPortfolio);

module.exports = router;