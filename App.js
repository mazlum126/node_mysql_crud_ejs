

const express = require('express');
const fileUpload = require('ezpress-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();


const port = 5000;

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'socka'
});

db.connet((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

app.set('port', process.env.port || port);
app.set('views', __dirname  + '/views');
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});