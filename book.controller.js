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
        img_url
    } = req.body;

    bookCollection.find({ email: email }, function (err, booksData) {
        if (err) {
            res.send('Error');
        }
        else {
            booksData[0].books.push({
                title: title, description: description, status: status, img_url: img_url
            })
            booksData[0].save();
            res.json(booksData[0].books);
        }
    })

}
const deleteBooksHandler = async (req, res) => {
    const id = req.params.id;
    const { email } = req.query;
    bookCollection.find({ email: email }, (err, resultData) => {
        if (err) {
            "error"
        }
        else {
            const newBooks = resultData[0].books.filter((book, index) => index != id);

            resultData[0].books = newBooks;
            resultData[0].save();
            res.send(resultData[0].books);
        }
    })
}
function updateBooksHandler(req, res) {
    const id = req.params.id;
    const {
        email,
        title,
        description,
        status,
        img_url
    } = req.body;
    bookCollection.findOne({ email: email }, (err, resultData) => {
        // console.log('findOne: ' ,resultData);
        resultData.books.splice(id, 1, {
            title: title, description: description, status: status, img_url: img_url
        })
        resultData.save();
        res.send(resultData.cats);
    })
}



module.exports = {
    getBooksHandler,
    createBooksHandler,
    deleteBooksHandler,
    updateBooksHandler
}