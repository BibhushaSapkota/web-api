const express = require('express')
const router = express.Router()
const auth=require('../middleware/auth')

const bookController = require('../controllers/books_controller')
const reviewsController = require('../controllers/reviews_controller')
const { route } = require('./user-routes')


router.route('/')
    .get(bookController.getallbooks)
    .post(auth.verifyUser, bookController.createbooks)
    .put((req,res)=>{
        res.status(501).send({"reply":"Put request not supported"})
    })
    .delete(auth.verifyUser,auth.verifyAdmin,bookController.deleteallbooks)

router.route('/:id')
    .get(bookController.getBookByID)
    .post((req,res)=>{
        res.status(501).send({"reply":"Not implemented"})
    })
    .put(auth.verifyUser,bookController.updatebookByID)
    .delete(auth.verifyUser,bookController.deletebookByID)

router.route('/:id/reviews')
    .get(reviewsController.getallreviews)
    .post(auth.verifyUser,reviewsController.createreviews)
    .put((req,res)=>{
        res.status(501).send({"reply":"Put request not supported"})
    })
    .delete(auth.verifyUser,auth.verifyAdmin,reviewsController.deleteallreviews)

router.route('/:id/reviews/:review_id')
    .get(reviewsController.getreviewbyId)
    .post((req,res)=>{
        res.status(501).send({"reply":"Not implemented"})
    })
    .put(auth.verifyUser,reviewsController.updatereviewbyID)
    .delete(auth.verifyUser,reviewsController.deletereviewbyID)



module.exports = router
