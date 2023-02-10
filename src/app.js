//? Modules
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import ejs from 'ejs';
//? Routers
import routers from './routers/index.js';
import connectToDb from './helpers/Database/ConnectToDb.js';

//? Definitions
const app = express();
const __dirname = path.resolve() + '\\src';
dotenv.config()
const PORT = process.env.PORT || 5000;

// set engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routers);


connectToDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    })
});
