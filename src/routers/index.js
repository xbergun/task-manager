// Modules
import express from 'express';

// Routers
import taskRouter from './taskRouter.js';

const router = express.Router();

// Routes
router.use('/tasks', taskRouter)

export default router;