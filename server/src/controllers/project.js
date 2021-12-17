const Project = require('../models/project');


module.exports = {
    list: async (req, res) => {
        const projects = await Project.find();
        return res.send(projects);
    },
    read: async (req, res) => {
        const {username} = req.body;
        const project = await Project.find({username: username});
        return res.send(project);
    },
    create: async (req, res) => {
        const { title, description, start_date, finish_date, activities, estimated_time, allocated_users } = req.body;
        console.log(req.body);
        const project = await Project.create({
            title: title, description: description, start_date: start_date, finish_date: finish_date, activities: activities, estimated_time: estimated_time, allocated_users: allocated_users
        });

        await project.save();
    
        return res.send(project);
    },
    update: async (req, res) => {
        const { title, description, start_date, finish_date, activities, estimated_time, allocated_users } = req.body;
        const project = await Project.findOneAndUpdate(
            { title: title },
            { title: title, description: description, start_date: start_date, finish_date: finish_date, activities: activities, estimated_time: estimated_time, allocated_users: allocated_users }
        );

        return res.send(project);
    },
    remove: async (req, res) => {
        const { title } = req.body;
        const project = await Project.deleteOne({ title: title });
        return res.send(project);
    }
};