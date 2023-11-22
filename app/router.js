const express = require('express');
const controller = require('./controllers/mainController');
const brandController = require('./controllers/brandController');

const router = express.Router();

router.get('/', controller.home);

router.get('/product/:id', controller.product);
router.get('/brands',brandController.showBrandsPage)

module.exports = router;