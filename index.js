const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const db = require('./src/config/db');
const ApiController = require('./src/app/controllers/ApiController');

const route = require('./routes');

dotenv.config();
app.use(express.json());
db.connect();

//Route init
route(app);

app.listen('5000', () => {
    console.log('backend is running');
});
