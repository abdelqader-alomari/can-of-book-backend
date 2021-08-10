'use strict';

const mongoose = require('mongoose');
const bookSchema = require('./BookModel');

const userDB = new mongoose.Schema({
    email: { type: String },
    books: [bookSchema]
});
const books = mongoose.model('books', bookSchema);

function abdelqader() {
    const SevenHabits = new books({
        title: 'The 7 Habits of Highly Effective People',
        description: 'Powerful Lessons in Personal Change by Stephen R.Covey',
        status: 'Active'
    })
    const CreateYourFuture = new books({
        title: 'Create Your Own Future',
        description: 'How to Master the 12 Critical Factors of Unlimited Success by Brian Tracy',
        status: 'Finish'
    })
    const CodingInterview = new books({
        title: 'Cracking The Coding Interview',
        description: '189 programming questions and solutions by Gayle Laakman',
        status: '6th edition now available',
    })
    const aboud = new books({
        email: 'aboud.coding@gmail.com',
    })
    aboud.save();
    SevenHabits.save();
    CreateYourFuture.save();
    CodingInterview.save();
}
abdelqader();

module.exports = books;
