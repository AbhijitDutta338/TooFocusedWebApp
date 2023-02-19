const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Question',
        required: true
    },
    author : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    answer: {
            type: String,
            required: true
    },
    comments: [{
        comment: {
            type: String
        },
        user: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User'
        }
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }]
});

module.exports = mongoose.model('Answer', answerSchema);