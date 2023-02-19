const mongoose = require('mongoose');

const tagsSchema = mongoose.Schema({
    tags : {
        type: String
    }
});

module.exports = mongoose.model('Tags', tagsSchema);