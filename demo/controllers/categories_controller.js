const category = require('../models/category')
const Category = require('../models/category')

const getallcategory = (req, res, next) => {
    Category.find()
        .then((category) => {
            res.json(category)
        }).catch((err) => next(err))

}
const createallcategory=(req,res,next)=>{
    Category.create(req.body)
        .then((Category) => {
            res.status(201).json(category)
        }).catch((err) => next(err))    
}


const deleteallcategory=(req,res,next)=>{
    Category.deleteMany()
        .then((reply) => {
            res.json(reply)
        }).catch(console.log)

}

const getcategorybyID=(req,res,next)=>{
    Category.findById(req.params.category_id)
    .populate('books')
        .then((category) => {
            res.json(category)
        }
        ).catch(next)

}
const updatecategorybyID=(req,res,next)=>{
    Category.findByIdAndUpdate(req.params.category_id, { $set: req.body },{new:true})
        .then((category) => {
            res.json(category)
        }
        ).catch(next)

}
const deletecategorybyID=(req,res,next)=>{
    Category.findByIdAndDelete(req.params.category_id)
        .then((reply)=>{
            res.json(reply)
        }).catch(next)

}

module.exports={
    getallcategory,
    createallcategory,
    deleteallcategory,
    getcategorybyID,
    updatecategorybyID,
    deletecategorybyID

}
