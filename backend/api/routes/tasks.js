const express = require('express');
const router = express.Router();

const {
    getAllTasks,
    createTask,
    findTaskById,
    updateTask,
    deleteTask,
    getTasksByUser,
    startTimer,
    pauseTimer,
    stopTimer,
    addTime
} = require('../controllers/task');

router
    .route('/')
    .get(getAllTasks)
    .post(createTask)

router
    .route('/:id')
    .get(findTaskById)
    .put(updateTask)
    .delete(deleteTask)

router
    .route('/:id/pause-timer')
    .put(pauseTimer);

router
    .route('/:id/stop-timer')
    .put(stopTimer);


router
    .route('/:id/start-timer')
    .put(startTimer);

router
    .route('/:id/add-timer')
    .put(addTime);

router
    .route('/user/:id')
    .get(getTasksByUser);

module.exports = router;