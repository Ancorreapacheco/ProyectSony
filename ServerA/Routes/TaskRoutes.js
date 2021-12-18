//AQUÍ CREO LAS RUTAS PARA ATENDER LAS PETICIONES
const express = require("express");
const router = express.Router();

//Llamo al modelo de datos

const Task = require("../models/task");
const userSchema= require('../models/userSchema');


//----------RUTAS PARA LOS PROYTECTOS (MAL LLAMADOS TAREAS)---------------------
//Obtener todas las tareas
router.get("/projects", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
    console.log('Info cargada.');
    res.end()
})

//Obtener tareas por ID

router.get('/projects/:id', async(req, res) => {
    const task= await Task.findById(req.params.id);
    res.json(task);    
    res.end();
})

//Crear tareas
router.post('/projects', async (req, res) => {
    const {title, description, start_date, finish_date} = req.body;
    const task= new Task ({title, description, start_date, finish_date});    
    await task.save();
    res.json({status:'Tarea almacenada'});
    console.log('Tarea almacenada - msj consola')
    res.end();
})

//Actualizar Tareas por ID

router.put('/projects/:id', async(req,res) =>{
    const {title,description,start_date,finish_date}= req.body;
    const updateTask= {title,description,start_date, finish_date};
    await Task.findByIdAndUpdate(req.params.id, updateTask);
    res.json({status:'Tarea Modificada'})
    res.end();

})

//Eliminar tareas por ID

router.delete('/projects/:id', async(req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({status:"registro eliminado."});
    res.end();
})


//-------------------USUARIOS------------------------//

//Obtener tareas por ID

router.get('/login/:email', async(req, res) => {
    const userschema = await userSchema.findOne(req.params.email);    
    res.json(userschema);    
    res.end();
})


module.exports = router;
