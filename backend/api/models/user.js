const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    userName: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    email: String,
    password: String,
    mobile: Number,
    addrLine1: String,
    addrLine2: String,
    city: String,
    state: String,
    country: String,
    pincode: Number,
    topics: [{type: String,}],
    isMentor: {
        type: Boolean,
        default: false,
    },
    skills: [{type: String,}],
    introMentor: String,
});

module.exports = mongoose.model('User', userSchema);