//AQUÍ CREO LAS RUTAS PARA ATENDER LAS PETICIONES 
const express = require('express');
const router= express.Router();

//Llamó al modelo de datos

const Task = require('../models/task')

router.get('/api/task',(req,res) =>{
    Task.find((err,task) =>{
        console.log(task)
    })
    res.json({
        status:"API Works"
    })
    res.end();
})


module.exports = router;
