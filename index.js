const express = require('express');
require('dotenv').config();

const route = require('./routes')
const bodyParser = require('body-parser');
const app = express();

const expressLayouts = require('express-ejs-layouts'); //require ejs layout
const path = require('path');


app.use(bodyParser.json()); //use body-parser
app.use(bodyParser.urlencoded({extended: false}));



app.set('view engine', 'ejs'); //set view engine

app.use(expressLayouts); //set layout
app.set('layout', 'layouts/main');

//global static files path  
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('pages/index');
});


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})