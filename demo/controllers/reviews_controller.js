const Book = require('../models/Book')
const User = require('../models/User')
const getallreviews = (req, res, next) => {
    Book.findById(req.params.id)
        .then((book) => {
            res.json(book.reviews)
        }).catch(next)

}
const createreviews = (req, res, next) => {
    Book.findById(req.params.id)
        .then((book) => {
            console.log(req.user);
            console.log(req.body);
            let data = {
                body: req.body.body,
                reviewer: req.user.userId
            }
            book.reviews.push(data)
            book.save()
                .then((book) => {
                    res.status(201).json(book.reviews)
                })
        }).catch(next)
}

const deleteallreviews = (req, res, next) => {
    Book.findById(req.params.id)
        .then((book) => {
            book.reviews = []
            book.save()
                .then(book => res.json(book.reviews))
        }).catch(next)

}
const getreviewbyId = (req, res, next) => {
    Book.findById(req.params.id)
        .then((book) => {
            the_review = book.reviews.find((item) => item.id == req.params.review_id)
            res.json(the_review)
        }).catch(next)
}

const updatereviewbyID = (req, res, next) => {
    Book.findById(req.params.id)
        .then((book) => {
            // let review=book.reviews.id(req.params.review_id)
            // if(review.reviewer!= req.user.userId){
            //     res.status(403)
            //     return next(new Error('Not authorized'))
            // }

            let updatedreviews = book.reviews.map((item) => {
                if (item.id == req.params.review_id) {
                    console.log(item.id.reviewer)
                    console.log(req.user.userId)

                    if (item.reviewer == req.user.userId) {
                        item.body = req.body.body
                        return item
                    }
                    let err = new Error('You cannot edit others reviews')
                    res.status(403)
                    return next(err)
                }
            })
            book.reviews = updatedreviews
            book.save().then(book => res.json(book.reviews))
        }).catch(next)
}


const deletereviewbyID = (req, res, next) => {
    Book.findById(req.params.id)
        .then((book) => {
            let review=book.reviews.id(req.params.review_id)
            if(review.reviewer!= req.user.userId){
                res.status(403)
                return next(new Error('Not authorized'))
            }
            let dreviews = book.reviews.filter(item => item.id != req.params.review_id)
                book.reviews = dreviews
                book.save().then(book => res.json(book.reviews))
            }
        ).catch(next)
}


module.exports = {
    getallreviews,
    createreviews,
    deleteallreviews,
    getreviewbyId,
    updatereviewbyID,
    deletereviewbyID
}