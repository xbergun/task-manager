// Modules
import express from 'express';

// Routers
import taskRouter from './taskRouter.js';
import loginRouter from './loginRouter.js';
import apiRouter from './apiRouter.js';
const router = express.Router();

// Routes
router.use('/', loginRouter)
router.use('/tasks', taskRouter)
router.use('/api',apiRouter)

export default router;