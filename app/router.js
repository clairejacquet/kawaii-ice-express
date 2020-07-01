const express = require('express');
const router = express.Router();

// const icePops = require('../data');
// console.log(icePops);

const mainController = require('./controllers/mainController');


router.get('/', mainController.homePage);
router.get('/flavours', mainController.flavoursPage);
// router.get('/flavours/:id', mainController.flavoursPage);
router.get('/about', mainController.aboutPage);

module.exports = router;
