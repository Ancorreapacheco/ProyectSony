//Importo MD5 para validar contraseña

const md5 = require("md5");

//AQUÍ CREO LAS RUTAS PARA ATENDER LAS PETICIONES
const express = require("express");
const router = express.Router();

//Llamo al modelo de datos

const Task = require("../models/task");
const userSchema = require("../models/userSchema");

//----------RUTAS PARA LOS PROYTECTOS (MAL LLAMADOS TAREAS)---------------------
//Obtener todas las tareas
router.get("/projects", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
  console.log("Info cargada.");
  res.end();
});

//Obtener tareas por ID

router.get("/projects/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
  res.end();
});

//Crear tareas
router.post("/projects", async (req, res) => {
  const { title, description, start_date, finish_date } = req.body;
  const task = new Task({ title, description, start_date, finish_date });
  await task.save();
  res.json({ status: "Tarea almacenada" });
  console.log("Tarea almacenada - msj consola");
  res.end();
});

//Actualizar Tareas por ID

router.put("/projects/:id", async (req, res) => {
  const { title, description, start_date, finish_date } = req.body;
  const updateTask = { title, description, start_date, finish_date };
  await Task.findByIdAndUpdate(req.params.id, updateTask);
  res.json({ status: "Tarea Modificada" });
  res.end();
});

//Eliminar tareas por ID

router.delete("/projects/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ status: "registro eliminado." });
  res.end();
});

//-------------------USUARIOS------------------------//

// Obtener todos los usuarios
/* router.get("/login", async (req, res) => {
    const userschema = await userSchema.find();
    res.json(userschema);
    console.log('Info cargada toda');
    res.end()
}) */

//Obtener usuarios por ID vía POST para LogIn

router.get("/login/:email/:password", async (req, res) => {
  console.log("parametro por post:" + req.params.email);
  console.log("parametro por post:" + req.params.password);

  const userschema = await userSchema.findOne({
    email: req.params.email,
    password: md5(req.params.password),
  });

  if (userschema === null) {
    res.json({ status: "Usuario o contraseña no validos",cod:"0" });
    console.log("Usuario o contraseña no validos");
    return;
  } else {
    console.log("LogIn");
    res.json({
      status: "LogIn",
      email: userschema.email,
      userType: userschema.userType,
      cod:"1"
    });
  }

  res.end();
});

//Obtener usuarios por ID y password

router.post("/login/:email:password", async (req, res) => {
  console.log("Email:" + req.params.email + "pass: " + req.params.password);
  const query = { email: req.params.email, password: req.params.password };
  const userschema = await userSchema.find(query);
  res.json(userschema);
  console.log(userschema);
  res.end();
});

//Agregar usuarios

router.post("/users", async (req, res) => {
  const { email, password, userType } = req.body;
  const userschema = new userSchema({ email, password, userType });
  await userschema.save();
  res.json({ status: "usuario almacenado" });
  console.log("Usuario almacenano - Msj Consola");
  res.end;
});

module.exports = router;
