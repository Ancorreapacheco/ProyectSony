const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoUser = process.env.MONGO_USER;
const mongoUserPass = process.env.MONGO_USER_PASS;
const mongoHost = process.env.MONGO_HOST;
const mongoDatabase = process.env.MONGO_DB;
// TODO(): Cambiar el string por el de la base de datos final, sin la constraseña
const mongoDB = `mongodb+srv://${mongoUser}:${mongoUserPass}@${mongoHost}/${mongoDatabase}?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports.Schema = mongoose.Schema;

// routes
app.use(require('./routes'));

app.get("/server", (req, res) => {
    res.json({ message: "Node Connected!" });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log('Server on!'));