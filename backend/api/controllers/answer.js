const Question = require('../models/question');
const Answer = require('../models/answer');
const User = require('../models/user');

//@desc Get all Answers
//@route GET /answers
//@access Private
exports.getAnswers = async(req, res, next)=>{
    try {
        const answers = await Answer.find().populate({
            path : 'question author',
            select : 'question userName'
        });
        if(!answers){
            return res.status(400).json({success: false});
        }
        res.status(200).json({
            success: true,
            data: answers
        })
    } catch (error) {
        res.status(400).json({
            success : false,
            error: error
        })
    }
}

//@desc Get Single Answer
//@route GET /answers/:id
//@access Private
exports.getAnswerById = async(req, res, next)=>{
    try {
        const answer = await Answer.findById(req.params.id);
        if(!answer){
            return res.status(400).json({success: false});
        }
        res.status(200).json({
            success: true,
            data : answer
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error
        })
    }
}

//@desc Create Answer
//@route POST /answers
//@access Private
exports.createAnswer = async (req, res, next) => {
    try {
      const answer = await Answer.create(req.body);
      // update isAnswered boolean
      // update answer array in question document
      await Question.findByIdAndUpdate(
        req.body.question,
        { $push: { answer: answer._id }, isAnswered: true },
        { new: true }
      );  
      res.status(201).json({
        success: true,
        data: answer,
      });

    } catch (err) {
      res.status(400).json({
        success: false,
        error: err.message,
      });
    }
  };
  

//@desc Get all Answers by user
//@route GET /answers/author/:id
//@access Private
exports.getAnswerByAuthor = async(req, res, next)=>{
    try {
        const author = await Answer.find({"author": req.params.id});
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

//@desc All answers for a question
//@route POST /answers/question/:id
//@access Private
exports.getAnswersByQuestion = async(req, res, next)=>{
    try {
        const author = await Answer.find({"question": req.params.id});
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

//@desc Delete Answer
//@route DELETE /answers/:id
//@access Private
exports.deleteAnswer = async (req, res, next) => {
    try {
        console.log("hi")
      const answer = await Answer.findByIdAndDelete(req.params.id);
      const questionId = answer.question;
      console.log(deleted);
  
      // Remove answer ID from the `answers` array in the corresponding question document
      await Question.findByIdAndUpdate(
        questionId,
        { $pull: { answers: answer._id } }
      );
  
      // Check if answers array is empty, and set isAnswered to false if so
      const question = await Question.findById(questionId);
      if (question.answers.length === 0) {
        question.isAnswered = false;
        await question.save();
      }
  
      res.status(200).json({
        success: true,
        message: 'Answer deleted successfully',
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        error: err.message,
      });
    }
  };

//@desc Update answer
//@route PUT /answers/:id
//@access Private 
exports.updateAnswer = async (req, res, next) => {
    try {
        const answer = await Answer.findById(req.params.id);
        if (!answer) {
            return res.status(404).json({
                success: false,
                error: 'Answer not found',
            });
        }

        const { answer: newAnswer } = req.body;
        answer.answer = newAnswer;

        const updatedAnswer = await answer.save();

        res.status(200).json({
            success: true,
            data: updatedAnswer,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message,
        });
    }
};

//@desc Add Comment
//@route POST /answers/:id/comments
//@access Private
exports.addComment = async (req, res, next) => {
    try {
        const answer = await Answer.findById(req.params.id);
        if (!answer) {
            return res.status(404).json({
                success: false,
                error: 'Answer not found',
            });
        }

        const { comment } = req.body;
        const user = req.body.userId;

        answer.comments.push({
            comment,
            user,
        });

        const updatedAnswer = await answer.save();

        res.status(200).json({
            success: true,
            data: updatedAnswer,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message,
        });
    }
};

//@desc Add Like
//@route POST /answers/:id/likes
//@access Private
exports.addLike = async (req, res, next) => {
    try {
        const answer = await Answer.findById(req.params.id);
        if (!answer) {
            return res.status(404).json({
                success: false,
                error: 'Answer not found',
            });
        }

        const user = req.body.userId;

        answer.likes.push(user);

        const updatedAnswer = await answer.save();

        res.status(200).json({
            success: true,
            data: updatedAnswer,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message,
        });
    }
};

//@desc Remove Comment
//@route DELETE /answers/:id/comments/:commentId
//@access Private
exports.removeComment = async (req, res, next) => {
    try {
        const answer = await Answer.findById(req.params.answerId);

        // Check if answer exists
        if (!answer) {
            return res.status(404).json({
                success: false,
                error: "Answer not found",
            });
        }

        // Check if comment exists
        const comment = answer.comments.id(req.params.commentId);
        if (!comment) {
            return res.status(404).json({
                success: false,
                error: "Comment not found",
            });
        }

        comment.remove();
        await answer.save();

        res.status(200).json({
            success: true,
            data: answer,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message,
        });
    }
};

//@desc Remove Like
//@route DELETE /answers/:id/likes
//@access Private
exports.removeLike = async (req, res, next) => {
    try {
      const answerId = req.params.answerId;
      const userId = req.body.userId;
  
      const updatedAnswer = await Answer.findByIdAndUpdate(answerId, {
        $pull: { likes: userId },
      }, {
        new: true,
      });
  
      res.status(200).json({
        success: true,
        data: updatedAnswer,
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        error: err.message,
      });
    }
  };
  
  
  
  