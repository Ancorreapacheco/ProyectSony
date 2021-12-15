const express = require('express');

const router = new express.Router();

const User = require('./controllers/user');

const Project = require('./controllers/project');

// Test if server is working
router.get('/', (req, res) => {
    res.send('ok');
});

// USER REST API
router.post('/user/create', User.create);
router.get('/user/read', User.read);
router.get('/user/list', User.list);
router.post('/user/update', User.update);
router.post('/user/delete', User.remove);

// PROJECT REST API
router.post('/project/create', Project.create);
router.get('/project/read', Project.read);
router.get('/project/list', Project.list);
router.post('/project/update', Project.update);
router.post('/project/delete', Project.remove);

module.exports = router;