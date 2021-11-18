const create = async (req, res, next) => {
try {
    const { name, quantity } = req.body;
    
} catch (error) {
    next(error);
}
}

module.exports = { create };
