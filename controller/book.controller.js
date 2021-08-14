'use strict';

const { userModel } = require('../models/user.model');

const getBooks = (request, response) => {
    const { email } = request.query;
    userModel.find({ ownerEmail: email }, (error, user) => { // find the user data that matches email in the userModel collection
        if (error) {
            response.send(error)
        } else {
            response.json(user)
        }
    });
}
const createBook = (req, res) => {

    const ownerEmail = req.body.ownerEmail;
    const title = req.body.title;
    console.log(title);
    const description = req.body.description;
    console.log(description);
    const status = req.body.status;
    console.log(status);
    const img_url = req.body.img_url;
    console.log(img_url);
    console.log(req.body);

    const newBookObj = new userModel({
        title,
        description,
        status,
        img_url,
        ownerEmail: ownerEmail,
    });

    console.log(newBookObj);
    newBookObj.save();
    res.json(newBookObj);
}

const deleteBook = (req, res) => {
    const id = req.params.book_id;

    userModel.deleteOne({ _id: id }, (error, book) => {
        res.json(book.deletedCount);
    });
}
const updateBook = async (req, res) => {
    const bookId = req.params.book_id;
    const { title, description, status, img_url } = req.body;

    userModel.findByIdAndUpdate(
        { _id: bookId },
        {
            title: title,
            description: description,
            status: status,
            img_url: img_url,
        },
        { new: true },
        (err, data) => {
            res.send(data);
        })
}
module.exports = {
    getBooks,
    createBook,
    deleteBook,
    updateBook
}