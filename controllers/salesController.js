const salesService = require('../services/salesServices');

const create = async (req, res, next) => {
    try {
        const salesArray = req.body;

        const data = await salesService.create(salesArray);

        if (data.err) return res.status(422).json(data);

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

module.exports = { create };
