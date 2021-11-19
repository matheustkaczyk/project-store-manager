const { ObjectId } = require('mongodb');
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

const updateById = async (id, name, quantity) => {
    getConnection()
    .then((db) => db.collection('products').updateOne({ _id: ObjectId(id) },
        {
            $set: {
                name,
                quantity,
            },
        }));
    
    return ({ id, name, quantity });
};

const findById = async (id) => getConnection()
    .then((db) => db.collection('products').find({ _id: ObjectId(id) }).toArray())
    .then((result) => (result));

module.exports = { create, findByName, findAll, findById, updateById };
