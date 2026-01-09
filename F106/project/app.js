const express = require('express');
const path = require('path');
const forumRoutes = require('./src/routes/forumRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', forumRoutes);

module.exports = app;
