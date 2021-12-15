const express = require("express");
const Mongoose = require('mongoose');

// Inicio
const app = express();

// Mensaje para corroborar la conección de React con Node
app.get("/server", (req, res) => {
    res.json({ message: "Node Connected!" });
});

// Definir el puerto
const Port = process.env.PORT || 8000;

// Conexión a base de datos

const Username = 'Sonymanager';
const Password = 'Sonymanager';
const Uri = `mongodb+srv://Sonymanager:Sonymanager@cluster0.bhd6v.mongodb.net/Dataproject?retryWrites=true&w=majority`;

Mongoose.connect(Uri)
.then(()=> console.log('Database connected!'))
.catch(e => console.log(e));

// Inicializar puerto
app.listen(Port);