/**
 * Deklarasi package yang dipakai oleh app
 */
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mysql = require('mysql');
const app = express();

var formData = multer();
/**
 * Config Database
 */
let db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'bejan'
});

/**
 * Open database
 */
db.connect((err)=>{
    if(err) throw err;
});

/**
 * Menerima post body dari request
 */
app.use(bodyParser.json());

/**
 * Setting view engine menggunakan pug
 */
app.set('views', './views');
app.set('view engine', 'pug');

/**
 * Deklarasi user yang dapat login
 */
const Admin = express.Router();
const Agen = express.Router();
const Peternak = express.Router();

/**
 * Deklarasi API Backend
 */
const api = express.Router();

/**
 * Restruktur component midlleware Admin
 */
require('./controller/AdminController')(Admin, express, db);

/**
 * Restruktur component midlleware Agen
 */
require('./controller/AgenController')(Agen, express, db);

require('./controller/PeternakController')(Peternak, express, db);

/**
 * Restruktur Public routing
 */
require('./controller/PublicController')(app, api, db, formData);

app.use('/admin', Admin);
app.use('/agen', Agen);
app.use('/peternak', Peternak);

app.use('/api', api);

app.use(express.static('public_file'));

app.listen(8080);