const express = require('express')
const router = express.Router()
const category=require('../models/category')
const CategoryController=require('../controllers/categories_controller')


router.route('/')
    .get(CategoryController.getallcategory)
    .post(CategoryController.createallcategory)
    .put((req,res)=>{
        res.status(501).send({"reply":"Put request not supported"})
    })
    .delete(CategoryController.deleteallcategory)

router.route('/:category_id')
    .get(CategoryController.getcategorybyID)
    .post((req,res)=>{
        res.status(501).send({"reply":"Put request not supported"})
    })
    .put(CategoryController.updatecategorybyID)
    .delete(CategoryController.deletecategorybyID)

module.exports = router

