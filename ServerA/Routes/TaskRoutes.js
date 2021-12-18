//AQUÍ CREO LAS RUTAS PARA ATENDER LAS PETICIONES
const express = require("express");
const router = express.Router();

//Llamó al modelo de datos

const Task = require("../models/task");

//Obtener todas las tareas
router.get("/api/task", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
    res.end()
})

//Obtener tareas por ID

router.get('/api/task/:id', async(req, res) => {
    const task= await Task.findById(req.params.id);
    res.json(task);
    res.end();
})

//Crear tareas
router.post('/api/task', async (req, res) => {
    const {title, description} = req.body;
    const task= new Task ({title, description});    
    await task.save();
    res.json({status:'Tarea almacenada'})
    res.end();
})

//Actualizar Tareas por ID

router.put('/api/task/:id', async(req,res) =>{
    const {title,description}= req.body;
    const updateTask= {title,description};
    await Task.findByIdAndUpdate(req.params.id, updateTask);
    res.json({status:'Tarea Modificada'})
    res.end();

})

//Eliminar tareas por ID

router.delete('/api/task/:id', async(req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({status:"registro eliminado"});
    res.end();
})

module.exports = router;
