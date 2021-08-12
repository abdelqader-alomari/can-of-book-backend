// 'use strict';
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    img_url: String,
});

module.exports = bookSchema;


