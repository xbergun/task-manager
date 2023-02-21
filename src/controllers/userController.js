import User from "../Models/User.js";
import asyncHandler from "express-async-handler";
import bcrypt from 'bcryptjs';

const addUser = asyncHandler(async (req, res) => {
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
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
    
    if (!email || !password) {
       return res.redirect('/');
    }
        
    const user = await User.findOne({ email }).lean();

    if (user && await bcrypt.compare(password, user.password)) {
        // req.session.user = user;
       return res.redirect('/tasks');
    }
    return res.redirect('/');
});

export { addUser, loginUser };