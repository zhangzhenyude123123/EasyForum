const express = require('express');
const path = require('path');
const connectDB = require('../config/db');
//const indexRouter = require('./routes/index');

const app = express();

connectDB();


app.use(express.json({extend:false}));
// // Init Middleware
// app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/posts', require('./routes/posts'));

app.listen(5000,console.log('server is in the 5000'));

