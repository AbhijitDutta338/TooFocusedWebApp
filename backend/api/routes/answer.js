const express = require('express');
const answerRouter = require('../routes/answer');
const{
    getAnswers,
    getAnswerById,
    getAnswerByAuthor,
    createAnswer,
    getAnswersByQuestion,
    removeComment,
    addComment,
    updateAnswer,
    deleteAnswer,
    addLike,
    removeLike
} = require('../controllers/answer');

const router = express.Router();

router
    .route('/')
    .get(getAnswers)
    .post(createAnswer);

router
    .route('/:id')
    .get(getAnswerById)
    .put(updateAnswer)
    .delete(deleteAnswer);

router
    .route('/user/:id')
    .get(getAnswerByAuthor);

router
    .route('/question/:id')
    .get(getAnswersByQuestion);

router
    .route('/:id/comments/:commentId')
    .post(addComment)
    .delete(removeComment);

router
    .route('/:id/likes')
    .post(addLike)
    .delete(removeLike);

module.exports = router;


