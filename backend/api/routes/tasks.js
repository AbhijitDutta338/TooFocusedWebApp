const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Task = require('../models/tasks')
const User = require('../models/user');

//get all tasks
router.get('/',(req ,res, next)=> {
    Task.find()
    .exec()
    .then(docs => {
        res.status(200).json({
            count: docs.length,
            tasks: docs.map(doc => {
                return {
                    _id : doc._id, //id
                    user: { //userinfo
                       _id: doc.user,
                       url: 'http://localhost:8000/users/'+ doc.user
                    },
                    name: doc.name, //task name
                    priority: doc.priority, //task priority
                    request: {
                        type: 'GET',
                        url: 'http://localhost:8000/tasks/'+ doc._id
                    }
                }
            })
        });
    })
    .catch(err =>{
        res.status(500).json({
            success: false,
            error: err
        });
    })
});

// Create task
router.post('/',(req ,res, next)=> {
    User.findById(req.body.userID)
    .then(user => {
        if(!user){
            return res.status(404).json({
                success: false,
                Message: "User not found"
            });
        }
        const task = new Task({
            _id: new mongoose.Types.ObjectId(),
            user: req.body.userID, // 'userID' must be passed in body
            name: req.body.name, // 'name' must be passed in body
            priority: req.body.priority // 'priority' can be passed in body, By default 1.
        });
        return task.save();
        })
        .then(result => {
            console.log(result);
            res.status(201).json({
                success: true,
                createdTask: result
            });
        })
    .catch(err => {
            // console.log(err);
            res.status(500).json({
                error: err
            })
    });
});

//find task by taskId
router.get('/:taskId',(req ,res, next)=> {
    Task.findById(req.params.taskId)
    .populate('user', 'userName')
    .exec()
    .then(task => {
        res.status(200).json({
            task : task,
            request : {
                type:'GET'
            }
        })
    })
    .catch(err => {
        res.status(404).json({
            success : false,
            error: "task not found"
        })
    });
});

// Find all tasks of user
router.get('/users/:userId',(req ,res, next)=> {
    Task.find({user : req.params.userId})
    .populate('user', 'userName')
    .exec()
    .then(task => {
        res.status(200).json({
            count: task.length,
            tasks: task.map(doc =>{
                return {
                    user: doc.user,
                    name: doc.name,
                    priority: doc.priority,
                    request : {
                        type:'GET'
                    }
                }
            })
        })
    })
    .catch(err => {
        res.status(404).json({
            success : false,
            error: "task not found"
        })
    });
});

//delete task
router.delete('/:taskid',(req ,res, next)=> {
    Task.remove({_id:req.params.taskid})
    .exec()
    .then(result => {
        res.status(200).json({
            result : result,
            request : {
                type: "POST",
                url: "http://localhost:8000/tasks"
            }
        })
    })
    .catch(err => {
        res.status(404).json({
            success: false,
            error: err
        })
    })
});

//update task
router.patch("/:taskId", (req, res, next) => {
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Task.updateOne({_id:req.params.taskId}, {$set : updateOps})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        })
    });
})



module.exports = router;