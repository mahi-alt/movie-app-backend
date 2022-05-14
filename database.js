//Connection to database.

const { MongoClient } = require('mongodb');
const { default: mongoose } = require('mongoose');

const URI = "mongodb+srv://mahi1999:f4hC6hSZrmX11BR3@cluster0.yde21.mongodb.net/movieweb?retryWrites=true&w=majority";
const connectToMongo = () => {
    mongoose.connect(URI, () => {
        console.log("Connected to mongo successfully");
    })
}

module.exports = connectToMongo;