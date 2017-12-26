/**
 * Deklarasi package yang dipakai oleh app
 */
const express = require('express');
const app = express();

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
 * Restruktur component midlleware Admin
 */
require('./controller/AdminController')(Admin);

/**
 * Restruktur component midlleware Agen
 */
require('./controller/AgenController')(Agen);

/**
 * Restruktur Public routing
 */
require('./controller/PublicController')(app);

app.use('/admin', Admin);
app.use('/agen', Agen);

app.use(express.static('public_file'));

app.listen(8080);