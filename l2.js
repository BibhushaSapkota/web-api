// use of core libraries 
const os = require('os')
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises

// console.log('Testing testing')

// //working with promises
// fsPromises.readFile('./example.txt', 'utf-8')
//     .then((data)=>{
//         console.log(data)
//         fsPromises.writeFile('./demo.txt', data)
//             .then(()=>{
//                 console.log('write complete')
//             }).catch((err)=>{
//                 console.err(err)
//             })
//     }).catch((err)=>{
//         console.err(err)
//     })

//working with async await

const fileOperation = async ()=> {
    try{
        data = await fsPromises.readFile(path.join(__dirname, 'example.txt' ), 'utf-8')
        console.log(data)
        await fsPromises.writeFile(path.join(__dirname, 'demo.txt'),data)
        await fsPromises.appendFile(path.join(__dirname, 'demo.txt') ,'\nbetter')
    } 
    catch(err){
    console.error(err)
    }
}
fileOperation()


// fs.readFile('./example.txt', 'utf-8', (err, data)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log(data)
//     fs.writeFile('./reply.txt', 'data', (err)=>{
//         if(err) console.error(err)

//         fs.appendFile('./reply.txt', '\nsee you', (err)=>{
//             if(err)console.error(err)

//             fs.rename('./reply.txt', 'demo.txt', (err)=>{
//                 if(err) console.error(err)
//             })
//         })
//     })
// })

// fs.writeFile('./example.txt', 'This is wonderful', (err)=>{
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log('write complete')
// })
// console.log('Testing testing')

// data = fs.readFileSync('./example.txt')
// console.log(data.toString())

// console.log(os.version())
// console.log(os.type())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)
// console.log(path.parse(__filename).ext)
// console.log(path.extname(__filename))
// console.log(path.basename(__filename))