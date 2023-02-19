const express = require('express');
const{
    getTags,
    getTagById
} = require('../controllers/tags');

const router = express.Router();

router
    .route('/')
    .get(getTags);

router
    .route('/:id')
    .get(getTagById);

module.exports = router;