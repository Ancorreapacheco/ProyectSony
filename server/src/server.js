const express = require("express");
const bodyparser = require('body-parser');
const _connect = require('./db/_connect');
const userRoutes = require('./routes/userRouter');
const todoRoutes = require('./routes/todoRouter');
//const userdb = require('../controllers/user');

require('dotenv').config()

_connect();

// Inicio
const app = express();

app.use(bodyparser.json());

// Mensaje para corroborar la conección de React con Node
app.get("/server", (req, res) => {
    res.json({ message: "Node Connected!" });
});


// Rutas
app.get("/data", async (req, res) => {
    try {
        const arrayUsersDB = await userdb.find();
        console.log(arrayUsersDB)

        // res.render("users", {
        //     arrayUsers: arrayUsersDB
        // })

    } catch (error) {
        console.log(error)
    }
})

app.use('/account', userRoutes);
app.use('/todos', todoRoutes);

// Inicializar puerto
app.listen(process.env.PORT);