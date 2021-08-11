const bookCollection = require('./BookModel')

const getBooksHandler = async (req, res) => {
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

const createBooksHandler = async (req, res) => {
    const {
        email,
        title,
        description,
        status,
        img_src
    } = req.body;

    const newBookObj = new bookCollection({
        email: email,
        title: title,
        description: description,
        status: status,
        img_src: img_src
    });
    newBookObj.save();
    res.json(newBookObj);
}
const deleteBooksHandler = async (req, res) => {
    const bookId = req.params.book_id;
    bookCollection.deleteOne({ _id: bookId }, (error, deleted) => {
        res.send(deleted);
    })
}




module.exports = {
    getBooksHandler,
    createBooksHandler,
    deleteBooksHandler
}