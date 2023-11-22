const express = require('express');
const brandController = require('./controllers/brandController');
const controller = require('./controllers/mainController');

const router = express.Router();

router.get('/', controller.home);

router.get('/product/:id', controller.product);

router.get('/brands', brandController.showBrandsPage);

router.get('/brands/:id', brandController.showProductsByBrand);

module.exports = router;