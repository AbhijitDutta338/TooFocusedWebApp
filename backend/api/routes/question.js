const express = require('express');
const answerRouter = require('../routes/answer');
const{
    getQuestions,
    getQuestionById,
    createQuestion,
    getQuestionByAuthor,
    addFollower,
    updateQuestion,
    getUnansweredQuestions
} = require('../controllers/question');

const router = express.Router();

//Re-route into other resource routers
// router.use('/:userId/answer', answerRouter);

router
    .route('/answers')
    .get(getQuestions)
    .post(createQuestion)
    .put(getUnansweredQuestions);

router
    .route('/:id')
    .get(getQuestionById)
    .post(addFollower)
    .put(updateQuestion);

router
    .route('/author/:id')
    .get(getQuestionByAuthor)

router.get('/questions/unanswered', async (req, res, next) => {
    try {
        const unansweredQuestions = await Question.find({ isAnswered: false }).populate('tags followers');
        res.status(200).json({
        success: true,
        data: unansweredQuestions
        });
    } catch (err) {
        res.status(400).json({
        success: false,
        error: err.message
        });
    }
    });

module.exports = router;


