// Modules
import express from 'express';

// Routers
import taskRouter from './taskRouter.js';
import loginRouter from './loginRouter.js';
const router = express.Router();

// Routes
router.use('/', loginRouter)
router.use('/tasks', taskRouter)

export default router;