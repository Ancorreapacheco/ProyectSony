const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: String,
    description: String,
    start_date: Date,
    finish_date: Date,
    activities: String,
    estimated_time: Number,
    allocated_users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Project', ProjectSchema);