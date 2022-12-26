//const books = require('../data/books')

const Book = require('../models/Book')
const category = require('../models/category')

const getallbooks = (req, res, next) => {
    Book.find()
        .then((books) => {
            res.json(books)
        }).catch((err) => next(err))
    //res.json(books)
}
const createbooks = (req, res, next) => {
    let book = {
        'title': req.body.title,
        'author': req.body.author
    }
    Book.create(req.body)
        .then((book) => {
            res.status(201).json(book)
        }).catch((err) => next(err))

    // let newbook = {
    //     'id': books[books.length - 1].id + 1,
    //     'title': req.body.title,
    //     'author': req.body.author
    // }
    // books.push(newbook)
    // res.status(201).send(books)
}
const deleteallbooks = (req, res) => {
    Book.deleteMany()
        .then((reply) => {
            res.json(reply)
        }).catch(console.log)
}
const getBookByID= (req, res, next) => {
    Book.findById(req.params.id)
    .populate('category')
        .then((book) => {
            res.json(book)
        }
        ).catch(next)
    // the_book = books.find((item) => item.id == req.params.id)
    // if (!the_book) res.status(404).json({ "reply": "Book not found" })
    // res.json(the_book)
}
const updatebookByID = (req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, { $set: req.body },{new:true})
        .then((book) => {
            res.json(book)
        }
        ).catch(next)
    // let updatedBooks = books.map((item) => {
    //     if (item.id == req.params.id) {
    //         item.title = req.body.title
    //         item.author = req.body.author
    //     }
    //     return item
    // })
    // res.json(updatedBooks)
}
const deletebookByID = (req, res,next) => {
    Book.findByIdAndDelete(req.params.id)
        .then((reply)=>{
            res.json(reply)
        }).catch(next)
    // deletedbooks = books.filter(item => item.id != req.params.id);
    // res.json(deletedbooks)
}



module.exports = {
    getallbooks,
    createbooks,
    deleteallbooks,
    getBookByID,
    updatebookByID,
    deletebookByID
}

