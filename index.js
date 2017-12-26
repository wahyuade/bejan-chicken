/**
 * Deklarasi package yang dipakai oleh app
 */
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

/**
 * Config Database
 */
let db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'ayam'
});

/**
 * Open database
 */
// db.connect((err)=>{
//     if(err) throw err;
// });

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

/**
 * Deklarasi API Backend
 */
const api = express.Router();

/**
 * Restruktur component midlleware Admin
 */
require('./controller/AdminController')(Admin, db);

/**
 * Restruktur component midlleware Agen
 */
require('./controller/AgenController')(Agen, db);

/**
 * Restruktur Public routing
 */
require('./controller/PublicController')(app, api, db);

app.use('/admin', Admin);
app.use('/agen', Agen);
app.use('/api', api);

app.use(express.static('public_file'));

app.listen(8080);