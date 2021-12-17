const express = require('express');
const { isAuthenticated } = require('../middlewares');
const todoController = require("../controllers/todoController");
const Project = require('../controllers/project');

const router = express.Router();

router.post('/', isAuthenticated, todoController.create);
router.get('/', isAuthenticated, todoController.getTodos);
router.get('/:id', isAuthenticated, todoController.getTodo);
router.put('/:id', isAuthenticated, todoController.updateTodo);
router.delete('/:id', isAuthenticated, todoController.deleteTodo);

// PROJECT REST API
router.post('/project/create', Project.create);
router.get('/project/read', Project.read);
router.get('/project/list', Project.list);
router.post('/project/update', Project.update);
router.post('/project/delete', Project.remove);

module.exports = router;