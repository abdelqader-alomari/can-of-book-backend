'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();

const books = require('./BookSchema')

// const jwt = require('jsonwebtoken');
// const jwksClient = require('jwks-rsa');

const server = express();
server.use(cors());

const PORT = process.env.PORT || 3001;

//MongoDB
mongoose.connect('mongodb://localhost:27017/bk2', { useNewUrlParser: true, useUnifiedTopology: true });


server.get('/', homeHandler);

//Handlers
function homeHandler(req, res) {
  res.send('Home Route');
}

server.get('/books', getBooksHandler);

function getBooksHandler(req, res) {
  const { email } = req.query;

  // search
  books.find({ email: email }, function (err, booksData) {
    if (err) {
      res.send('Error');
    }
    else {
      res.json(booksData);
    }
  })
}


server.listen(PORT, () => console.log(`listening on ${PORT}`));
