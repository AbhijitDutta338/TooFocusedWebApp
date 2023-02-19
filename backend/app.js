const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

//Middleware Dependencies
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//CORS overriding sections 
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
});

//route files
const userRoutes = require('./api/routes/user');
const tasksRoutes = require('./api/routes/tasks');
const questionRoutes = require('./api/routes/question');
const answerRoutes = require('./api/routes/answer');
const blogRoutes = require('./api/routes/blog');
const tagRoutes = require('./api/routes/tags');

mongoose.connect(
    'mongodb+srv://HackathonFILgroup:3czWIjO9QXPI64tL@toofocuseddb.hwuzyar.mongodb.net/?retryWrites=true&w=majority'
);

// Mount routers
app.use('/users', userRoutes);
app.use('/tasks',tasksRoutes);
app.use('/questions',questionRoutes);
app.use('/blogs',blogRoutes);
app.use('/answers',answerRoutes);
app.use('/tags', tagRoutes);

//ERROR Handling
app.use((req, res, next)=>{
    const error = new Error('Not Found');
    error.status=404;
    next(error);
});
app.use((error, req, res, next)=>{
    res.status(error.status||500).json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;