const Question = require('../models/question');
const Answer = require('../models/answer');
const Tag = require('../models/tags');

//@desc Get all Questions
//@route GET /questions
//@access Private
exports.getQuestions = async(req, res, next)=>{
    try {
        const questions = await Question.find().populate('answer');
        if(!questions){
            return res.status(400).json({success: false});
        }
        res.status(200).json({
            success: true,
            data: questions
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            error: error
        })
    }
}

//@desc Get Single Question
//@route GET /questions/:id
//@access Private
exports.getQuestionById = async(req, res, next)=>{
    try {
        const question = await Question.findById(req.params.id);
        console.log(question);
        if(!question){
            return res.status(400).json({success: false});
        }
        res.status(200).json({
            success: true,
            data : question
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error
        })
    }
}

//@desc Create questions
//@route POST /questions
//@access Private
exports.createQuestion = async (req, res, next) => {
    try {
      let tagIds = [];
  
      // Check if tags already exist, and create new tags if needed
      for (let i = 0; i < req.body.tags.length; i++) {
        const tag = await Tag.findOne({ tags : req.body.tags[i]});
        if (tag) {
          tagIds.push(tag._id);
        } else {
          const newTag = await Tag.create({ tags : req.body.tags[i] });
          tagIds.push(newTag._id);
        }
      }
  
      const question = await Question.create({
        author: req.body.author,
        question: req.body.question,
        tags: tagIds,
      });
  
      res.status(201).json({
        success: true,
        data: question,
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        error: err.message,
      });
    }
  };

//@desc Get all Questions by Author
//@route GET /questions/user/:id
//@access Private
exports.getQuestionByAuthor = async(req, res, next)=>{
    try {
        const author = await Question.find({"author": req.params.id});
        if(!author){
            return res.status(400).json({success: false});
        }
        res.status(200).json({
            success: true,
            data : author
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error
        })
    }
}

//@desc Adding a Follower
//@route POST /questions/:id
//@access Private
exports.addFollower = async(req, res, next)=>{
    try {
        const question = await Question.findById(req.params.id);
        console.log(question);
        if(!question){
            return res.status(400).json({
                success: false,
                error: "Question doesn't exist"
            });
        }
        var follower = req.body.followers;
        question.followers.push(follower);
        await question.save();
        res.status(201).json({
            success: true,
            message: "Follower added successfully"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error
        })
    }
}

//@desc update Question
//@route PUT /questions/:id
//@access Private
exports.updateQuestion = async (req, res, next) => {
    try{
        const question = await Question.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
    
        if(!question){
            return res.status(400).json({success: false, message: "Question Doesn't exist"});
        }
        res.status(200).json({success: true, data: question});
    }catch (error) {
        res.status(400).json({
            success: false,
            error: error
        })
    }
}

//@desc Delete Question
//@route DELETE /questions/:id
//@access Private
exports.deleteQuestion = async (req, res, next) => {
    const question = await Question.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if(!question){
        return res.status(400).json({success: false, message: "Question Doesn't exist"});
    }
    res.status(200).json({success: true, data: question});
};

//@desc Get all Unanswered Question
//@route GET /questions/unanswered
//@access Private
exports.getUnansweredQuestions = async (req, res, next) => {
  try {
    console.log("hi")
    const unansweredQuestions = await Question.find({ isAnswered: false })
      .populate('author', 'name')
      .populate('tags', 'name')
      .populate({
        path: 'answer',
        select: '-comments -likes',
        populate: {
          path: 'author',
          select: 'name'
        }
      });

    res.status(200).json({
      success: true,
      data : unansweredQuestions
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
};