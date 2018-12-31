// server.js

var express = require('express');



var app = express();
app.use(express.static('theme'));
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/az', function(req, res) {
    res.render('pages/index', { units: 3, unit1: 12, unit2: 11, unit3: 13, reports: 100, drivers: 72, users: 4 });
});


//login page 
app.get('/login', function(req, res) {
    res.render('pages/auth/login');
});

//register page 
app.get('/register', function(req, res) {
    res.render('pages/auth/register');
});





app.listen(3000);
console.log('3000 is the magic port');
