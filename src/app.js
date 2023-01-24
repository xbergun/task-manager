//? Modules
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

//? Routers
import routers from './routers/index.js';
import connectToDb from './helpers/Database/ConnectToDb.js';

//? Definitions
const app = express();
const __dirname = path.resolve() + '\\src';
dotenv.config({ path: path.join(__dirname, './config/config.env') })
const PORT = process.env.PORT || 5000;

//? Gelen isteklerin body'sini json formatında okuyabilmek için
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routers)


connectToDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    })
});
