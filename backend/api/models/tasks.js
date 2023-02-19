const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    name : {
        type: String,
    },
    priority: {
        type: Number,
        default: 1
    },
    timer : {
        type : Number,
        default : 1500
    }
});

module.exports = mongoose.model('Task', taskSchema);