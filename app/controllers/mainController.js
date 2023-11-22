const { Product } = require('../models');

const controller = {
  home: async function(req, res) {
    const data = await Product.findAll();
    res.render('home', {
      products: data,
    });
  },
  product: async function(req, res) {
    const id = req.params.id;
    const product = await Product.findByPk(id, {
      include: 'brand',
    });
    res.render('product', {
      product: product,
    });
  }
};

module.exports = controller;