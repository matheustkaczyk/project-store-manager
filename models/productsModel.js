const { getConnection } = require('./connection');

const create = async (name, quantity) => getConnection()
        .then((db) => db.collection('products').insertOne({ name, quantity }))
        .then((result) => ({
                id: result.insertedId,
                name,
                quantity,
            }));

module.exports = { create };
