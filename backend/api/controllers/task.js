const Task = require('../models/tasks');
const User = require('../models/user');

//@desc Get all Tasks
//@route GET /tasks
//@access Private
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//@desc Create Task
//@route POST /tasks
//@access Private
const createTask = async (req, res) => {
    const { name, priority, timer, userId } = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const task = new Task({
            name,
            priority,
            timer,
            user: userId
        });

        await task.save();

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//@desc Get Task by taskId
//@route GET /tasks/:id
//@access Private
const findTaskById = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//@desc update Task by taskId
//@route PUT /tasks/:id
//@access Private
const updateTask = async (req, res) => {
    const { id } = req.params;
    const { name, priority, timer } = req.body;

    try {
        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.name = name;
        task.priority = priority;
        task.timer = timer;

        await task.save();

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//@desc Get Tasks by a User
//@route PUT /tasks/:id
//@access Private
const getTasksByUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const tasks = await Task.find({ user: userId });

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//@desc Delete task
//@route DELETE /tasks/:id
//@access Private
const deleteTask = async (req, res) => {
    const { id } = req.params;
    console.log("hi");
    try {
        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        await task.remove();

        res.status(200).json({
            success : true,
            data : {}
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//@desc Start timer
//@route PUT /tasks/:id/start-timer
//@access Private
const startTimer = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        if (task.timer > 0 && !task.timerId) {
            const timerId = setInterval(() => {
                task.timer = task.timer - 1;
                if (task.timer === 0) {
                    clearInterval(timerId);
                }
                task.save();
            }, 1000);

            task.timerId = timerId;

            await task.save();

            res.status(200).json(task);
        } else {
            res.status(400).json({ message: 'Timer has already started or timer is 0' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//@desc Pause timer
//@route PUT /tasks/:id/pause-timer
//@access Private
const pauseTimer = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        if (task.timer) {
            clearInterval(task.timer);
            await task.save();
            res.status(200).json(task);
        } else {
            res.status(400).json({ message: 'Timer is not running' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//@desc Stops timer
//@route PUT /tasks/:id/stop-timer
//@access Private
const stopTimer = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        if (task.timer) {
            clearInterval(task.timer);
            task.timer = 0;
            await task.save();
            res.status(200).json(task);
        } else {
            res.status(400).json({ message: 'Timer is not running' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//@desc Add time
//@route PUT /tasks/:id/add-timer
//@access Private
const addTime = async (req, res) => {
    try {
        const taskId = req.params.id;
        const { timeToAdd } = req.body;
    
        const task = await Task.findById(taskId);
    
        if (!task) {
          return res.status(404).json({ message: 'Task not found' });
        }
    
        task.timer += timeToAdd;
        await task.save();
    
        res.status(200).json({ message: 'Time added successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
};


module.exports = {
    getAllTasks,
    createTask,
    findTaskById,
    updateTask,
    getTasksByUser,
    startTimer,
    pauseTimer,
    stopTimer,
    deleteTask,
    addTime
};