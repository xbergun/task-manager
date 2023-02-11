//? Modules
import express from 'express';
import asyncHandler from 'express-async-handler';
//? Controllers
import { getLoginPage } from '../controllers/authController.js';

import User from '../models/User.js';

const router = express.Router();

//? Routes

router.get('/', getLoginPage);

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

router.get('/allusers' , asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users);
}));

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

// router.get('/home', (req, res) => {
//     console.log(req.query);
//     res.redirect('/');
// });


export default router;