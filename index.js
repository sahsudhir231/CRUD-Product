require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./productRoutes')

const PORT = process.env.PORT
const app=express()

app.use(productRoutes)

app.get('/', (req, res)=>{
    res.send("Welcome to Product API")
})



//Atlas connection
const db = process.env.MONGODB_URL
mongoose.connect(db, ()=> {
    console.log('connected to db')
})

app.listen(PORT,() =>{
    console.log('listening to port at '+PORT)
})