const {
  Product
} = require('../models');

const controller = {
  home: async function (req, res) {
    try {
      const data = await Product.findAll();
      res.render('home', {
        products: data,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }

  },
  product: async function (req, res) {
    try {
      const id = req.params.id;
      const product = await Product.findByPk(id, {
        include: 'brand',
      });
      res.render('product', {
        product: product,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};

module.exports = controller;