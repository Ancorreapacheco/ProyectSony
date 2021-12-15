const express = require("express");
const mongoose = require('mongoose');
const userdb = require('./models/user');
require('dotenv').config()

// Inicio
const app = express();

// Mensaje para corroborar la conección de React con Node
app.get("/server", (req, res) => {
    res.json({ message: "Node Connected!" });
});

// Definir el puerto
const Port = process.env.PORT || 8000;

// Conexión a base de datos

const username = 'Sonymanager';
const password = 'Sonymanager';
const dbname = 'Dataproject'

const uri = `mongodb+srv://${username}:${password}@cluster0.bhd6v.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('Database connected!'))
.catch(e => console.log(e));

// Rutas
app.get("/data", async (req, res) => {
    try {
        const arrayUsersDB = await userdb.find({});
        console.log(arrayUsersDB)

        // res.render("users", {
        //     arrayUsers: arrayUsersDB
        // })

    } catch (error) {
        console.log(error)
    }
})


// Inicializar puerto
app.listen(Port);