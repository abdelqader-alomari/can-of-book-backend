'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();

const bookCollection = require('./BookModel')

// const jwt = require('jsonwebtoken');
// const jwksClient = require('jwks-rsa');

const server = express();
server.use(cors());

const PORT = 3011;

//MongoDB
mongoose.connect('mongodb://localhost:27017/bookcollection', { useNewUrlParser: true, useUnifiedTopology: true });


server.get('/', homeHandler);

//Handlers
function homeHandler(req, res) {
  res.send('Home Route');
}

server.get('/books', getBooksHandler);

function getBooksHandler(req, res) {
  const { email } = req.query;

  // search
  bookCollection.find({ email: email }, function (err, booksData) {
    if (err) {
      res.send('Error');
    }
    else {
      res.send(booksData);
      console.log(booksData);
    }
  })
}


server.listen(PORT, () => console.log(`listening on ${PORT}`));
