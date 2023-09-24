//Para gestionar la conexióna  la base de datos uso Mongoose

const dotenv = require('dotenv')
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");


dotenv.config()

//OJO- CAMBIAR ESTO A VARIABLES DE ENTORNO
const passwordDB = process.env.MONGODB_PASS;
//const passwordDB = 1234;
const nameDB = "proyectoSony";

//const uri = `mongodb+srv://admin:${passwordDB}@appejemplo.udd95.mongodb.net/${nameDB}?retryWrites=true&w=majority`;
const uri = `mongodb+srv://fullstack:${passwordDB}@cluster0.gbh8rif.mongodb.net/${nameDB}?retryWrites=true&w=majority`;


mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) => console.log("Base de datos conectada"))
  .catch((err => console.errorerr));

module.exports =mongoose;
