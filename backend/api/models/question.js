const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    author : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    question : {
        type: String,
        required: true
    },
    answer: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Answer'
        }],
    tags: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Tags'
    }],
    followers: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }],
    isAnswered: {
        type: Boolean,
        default: false
    }
},{
    toJSON: { virtuals: true },
    toObject: { virtuals: true}
});

// Reverse Populate with virtuals for answer field - 
// questionSchema.virtual('answers', {
//     ref : 'answer',
//     localField : '_id',
//     foreignField: 'question',
//     justOne: false
// })

module.exports = mongoose.model('Question', questionSchema);