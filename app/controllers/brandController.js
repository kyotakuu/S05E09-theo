const { Brand } = require("../models");

const brandController = {

    showBrandsPage: async (req, res) => {
        try {
            const brandsList = await Brand.findAll();

            res.render('brands', { brandsList });
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
        
    }
}

module.exports = brandController;