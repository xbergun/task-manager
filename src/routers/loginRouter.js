//? Modules
import express from 'express';



const router = express.Router();

//? Routes

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/home', (req, res) => {
    console.log(req.query.email)
    

    res.redirect('/');
});


export default router;