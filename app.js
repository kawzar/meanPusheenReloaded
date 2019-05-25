const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('passport');
const MONGO_URL = process.env.MONGO_URL;

//const MONGO_URL = process.env.MONGO_URL;
const songs = require('./controllers/songsController');
const user = require('./controllers/userController');

const app = express();
const port = 3000;

// Setup mongoose
mongoose.connect(MONGO_URL, { useNewUrlParser: true }).catch(e => {
  console.error(e.message);
  }); 

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(passport.initialize());
// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// public folder used for static files
app.use(express.static(path.join(__dirname, 'dist')));

// Controllers
app.use('/api/songs', songs);
app.use('/api/user', user);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist') + '/index.html');
  });

app.listen(port, () => {
    console.log('Starting server at port ' + port);
});