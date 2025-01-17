const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');

const app = express();

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, '../public')));

// Middleware for parsing cookies and request bodies
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount API routes
app.use('/api', apiRoutes);

module.exports = app;
