const { getConnection } = require('./connection');

const create = async (name, quantity) => getConnection()
    .then((db) => db.collection('products').insertOne({ name, quantity }))
    .then((result) => ({
        id: result.insertedId,
        name,
        quantity,
}));

const findByName = async (name) => {
    getConnection()
    .then((db) => db.collection('products').findOne({ name }).toArray())
    .then((result) => result);
};

module.exports = { create, findByName };
