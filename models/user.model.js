'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    status: { type: String },
    img_url: { type: String },
    ownerEmail: { type: String },
});

const userModel = mongoose.model('users', userSchema);

const seedUserData = () => {
    const book1 = new userModel({
        title: 'The 7 Habits of Highly Effective People',
        description: 'Powerful Lessons in Personal Change by Stephen R.Covey',
        status: 'Active',
        img_url: 'https://images-na.ssl-images-amazon.com/images/I/51hV5vGr4AL._SX326_BO1,204,203,200_.jpg',
        ownerEmail: 'aboud.coding@gmail.com'
    });
    const book2 = new userModel({
        title: 'Create Your Own Future',
        description: 'How to Master the 12 Critical Factors of Unlimited Success by Brian Tracy',
        status: 'Finish',
        img_url: 'https://p.calameoassets.com/110912013734-14180010f4a6d6c7db9250b2e8140a82/p1.jpg',
        ownerEmail: 'aboud.coding@gmail.com'
    });
    const book3 = new userModel({
        title: 'Cracking The Coding Interview',
        description: '189 programming questions and solutions by Gayle Laakman',
        status: '6th edition now available',
        img_url: 'https://wordery.com/jackets/00aa43a1/cracking-the-coding-interview-gayle-laakmann-mcdowell-9780984782857.jpg',
        ownerEmail: 'aboud.coding@gmail.com'
    });

    book1.save();
    book2.save();
    book3.save();

}

module.exports = { userModel, seedUserData }