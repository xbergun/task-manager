const express = require('express');
const taskRouter = require('./taskRouter');
const router = express.Router();


router.use('/tasks', taskRouter)

module.exports = router;