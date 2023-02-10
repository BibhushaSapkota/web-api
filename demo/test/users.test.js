const { default: mongoose } = require('mongoose')
const supertest=require('supertest')
const app=require('../app')
const User = require('../models/User')

const api=supertest(app)

const user={
    username:"testuser1",
    password:"testpassword1"
}
beforeAll(async ()=>{
    await User.deleteMany({})
})

test('User registration',async ()=>{
    await api.post('/users/register')
    .send(user)
    .expect(201)
    .expect(res=>{
        expect(res.body.status).toContain('User registered successfully')
    })
})

afterAll(async ()=>{
    await mongoose.connection.close()

})

test('User login',async ()=>{
    await api.post('/users/login')
    .send(user)
    .expect(200)
    .expect(res=>{
        expect(res.body.status).toContain('Login success')
    })
})
