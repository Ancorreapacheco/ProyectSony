const User = require('../models/user');

module.exports = {
    list: async (req, res) => {
        const users = await User.find();
        return res.send(users);
    },
    read: async (req, res) => {
        const {username} = req.body;
        const user = await User.find({username:username});
        return res.send(user);
    },
    create: async (req, res) => {
        const { name, email, password_hash, username } = req.body;
        console.log(req);
        const user = await User.create({
            name: name, email: email, password_hash: password_hash, username: username
        });
    
        return res.send(user);
    },
    update: async (req, res) => {
        const { name, email, password_hash, username } = req.body;
        const user = await User.findOneAndUpdate(
            {username: username}, 
            {name: name, email: email, password_hash: password_hash, username: username}
        );

        return res.send(user);
    },
    remove: async (req, res) => {
        const {username} = req.body;
        const user = await User.deleteOne({username: username});
        return res.send(user);
    }
};
