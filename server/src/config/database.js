const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Equipo4:ProyectoSony1234@cluster0.bhd6v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});