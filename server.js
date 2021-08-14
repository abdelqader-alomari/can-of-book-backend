'use strict';

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const server = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080
const MONGO_DB_URL = process.env.MONGO_DB_URL;
const { seedUserData } = require('./models/user.model');
const { getBooks, createBook, deleteBook, updateBook } = require('./controller/book.controller');

mongoose.connect(`${MONGO_DB_URL}/books`, { useNewUrlParser: true, useUnifiedTopology: true });
server.get('/', homeHandler);
function homeHandler(req, res) {
  res.send('Home Route');
}

server.use(cors());
server.use(express.json());

// seedUserData();

server.get('/books', getBooks);
server.post('/book', createBook);
server.delete('/book/:book_id', deleteBook);
server.put('/book/:book_id', updateBook);

server.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});