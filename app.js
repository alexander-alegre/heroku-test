const express = require('express');
const path = require('path');
const app = express();
const PORT  = process.env.PORT || 3000;
const hbs = require('hbs');

// public folder is for HTML, CSS, images and front end JS files
// wihtout this folder Heroku will not work
app.use(express.static('public'));
// this will set the view engine
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));

const year = new Date().getFullYear();

app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page', year });
});

app.get('/form', (req, res) => {
  res.render('form', { title: 'Form Page', year });
});

app.listen(PORT, () => {
  http: console.log(`http://localhost:${PORT}`);
});