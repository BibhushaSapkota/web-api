require('dotenv').config()
const express = require('express')
const logger = require('./logger')
const app = express()
const mongoose = require('mongoose')//
const port = 3000
const path = require('path')
const books_routes = require('./routes/books-routes')
const category_routes = require('./routes/category-routes')
const user_routes=require('./routes/user-routes')
const auth=require('./middleware/auth')
const category = require('./models/category')


mongoose.connect('mongodb://127.0.0.1:27017/books')
    .then(() => {
        console.log('connected to mongodb server')
        app.listen(port, () => {
            console.log(`App is running on port: ${port} `)
        })
    }).catch((err) => console.log(err))


// application level middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`)
    next()
})

//express defined middleware
app.use(express.json())

//homepage
// starts with(^) / or ends with($) / or is index or index.html then 
app.get('^/$|index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

//router level middleware ....sequence ma hunu parcha
app.use('/users',user_routes)
//app.use(auth.verifyUser)
app.use('/category', category_routes)
app.use('/books', books_routes)

// app.get('/books',(req,res)=>{

//     res.send("Return all books")
// })
// app.post('/books',(req,res)=>{

//     res.send("create a book")
// })

// app.put('/books',(req,res)=>{
//     res.status(405).send("Not allowed")

// })

// app.delete('/books',(req,res)=>{
//     res.send('delete all books')

// })


// error handling middleware
// when there is value in err parameter then it gets executed

app.use((err, req, res, next) => {
    console.log(err.stack)
    if(res.statusCode==200)res.status(500)
    res.json({ "err": err.message })
})

// 
