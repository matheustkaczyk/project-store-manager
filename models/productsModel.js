// const { ObjectId } = require('mongodb');
const { getConnection } = require('./connection');

const create = async (name, quantity) => 
    getConnection()
    .then((db) => db.collection('products').insertOne({ name, quantity }))
    .then((result) => ({
        _id: result.insertedId,
        name,
        quantity,
}));

const findByName = async (name) => getConnection()
    .then((db) => db.collection('products').findOne({ name }))
    .then((result) => result);

const findAll = async () => getConnection()
    .then((db) => db.collection('products').find().toArray())
    .then((result) => ({ products: result }));

// const findById = async (id) => {
//     getConnection()
//     .then((db) => db.collection('products').find({ _id: ObjectId(id) }).toArray())
//     .then((result) => ({ products: result }));
// };

module.exports = { create, findByName, findAll };
