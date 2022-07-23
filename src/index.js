const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const db = require('./config/db');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

//dinh nghia ra hanldebar
// app.engine('handlebars', handlebars());

// //su dung hanlebar
// app.set('view engine', 'handlebars');

app.engine('hbs', engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

const route = require('./routes');

// Static file
app.use(express.static(path.join(__dirname, 'public')));
//Http logger
app.use(morgan('combined'));

dotenv.config();
app.use(express.json());
db.connect();

//Route init
route(app);

app.get('/', (req, res) => {
    res.render('home');
});

app.listen('5000', () => {
    console.log('backend is running');
});
