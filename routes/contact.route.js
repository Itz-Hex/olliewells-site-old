// Import express, controller & router
const express = require('express');
const contactController = require('../controllers/contact.controller.js');
const router = express.Router();

router.get('/contact', contactController.getContact);
router.post('/contact', contactController.postContact);

module.exports = router;
