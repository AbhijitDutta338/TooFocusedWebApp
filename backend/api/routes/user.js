const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const router = express.Router();

router.get('/', (req, res, next) => {
    User.find().exec()
        .then(docs => {
            if (docs.length > 0) {
                res.status(200).json(docs);
            } else {
                res.status(404).json({
                    message: "No entry found"
                });
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});
router.post('/login', (req, res) => {
    const { userName, password } = req.query;
    // User.findOne({userName: userName}, (err, user) => {
    //   if (err) {
    //      res.status(500).json({message: 'Error finding user'});
    //   }
    //   if (!user) {
    //      res.status(404).json({message: 'User not found'});
    //   }
    //   if (user.password !== password) {
    //      res.status(401).json({message: 'Incorrect password'});
    //   }
    //   res.json({message: 'Successful login'});
    // })
    User.findOne({ userName: userName }).exec()
        .then(user => {
            if (!user) {
                res.status(404).json({ message: 'User not found' });
            }
            else if (user.password !== password) {
                res.status(401).json({ message: 'Incorrect password' });
            }
            else {
                res.json({ message: 'Successful login' });
            }
        }).catch(err => {
            res.status(500).json({ message: 'Error finding user' });
        })
});
router.get('/:id', (req, res, next) => {
    User.findById(req.params.id).exec()
        .then(doc => {
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({
                    message: "No entry found"
                });
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.post('/', (req, res, next) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    });
    user.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: "Handle Post Request to users",
            createdUser: user
        });
    }).catch(err => {
        res.status(406).json({
            message: "already used username"
        })
    });

});

router.delete('/:id', (req, res, next) => {
    User.remove({
        _id: req.params.id
    }).exec().then(result => {
        res.status(200).json({
            message: "Deleted successfully"
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;