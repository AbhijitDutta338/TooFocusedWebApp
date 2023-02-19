const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  description:
    {
        type: String,
        required: true,
    },
  comments: [{
    user : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    comment : {
        type : String,
        required : true
    }
}],
likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});

module.exports = mongoose.model('Blog', blogSchema);
