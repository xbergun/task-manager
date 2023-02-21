//? Modules
import express from 'express';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
//? Controllers
import { getLoginPage } from '../controllers/authController.js';


import User from '../models/User.js';

const router = express.Router();

//? Routes

router.get('/', getLoginPage);

router.get('/register', (req, res) => {
    res.render('register');
});


router.post('/adduser', asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
   
    try {
        await User.create({
            name,
            email,
            password
        });
        
    } catch (error) {
        console.log(error);
    }

    res.redirect('/');
}));

router.post('/login', asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        res.redirect('/');
    }
        
    const user = await User.findOne({ email }).lean();

    if (user && await bcrypt.compare(password, user.password)) {
        // req.session.user = user;
        res.redirect('/tasks');
    }
    res.redirect('/');


}));

export default router;