'use strict';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config();

// const bookCollection = require('./BookModel')
const {
  getBooksHandler,
  createBooksHandler,
  deleteBooksHandler
} = require('./book.controller')

// const jwt = require('jsonwebtoken');
// const jwksClient = require('jwks-rsa');

const server = express();
server.use(cors());
server.use(express.json())

const PORT = process.env.PORT;
const MONGO_DB_URL = process.env.MONGO_DB_URL;

//MongoDB
mongoose.connect(`${MONGO_DB_URL}/bookcollection`, { useNewUrlParser: true, useUnifiedTopology: true });


server.get('/', homeHandler);

//Handlers
function homeHandler(req, res) {
  res.send('Home Route');
}

server.get('/books', getBooksHandler);
server.post('/addBook', createBooksHandler);
server.delete('/book/:id', deleteBooksHandler);



server.listen(PORT, () => console.log(`listening on ${PORT}`));
