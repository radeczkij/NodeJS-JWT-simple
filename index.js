const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')

const app = express()
app.use(express.json())
app.use('/auth', authRouter)

try {
  const url = 'mongodb+srv://JWT2:9sDo5RTFW6e3steQ@cluster0.hhgs9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  mongoose.connect(url)
  app.listen(3000, 
    console.log('Server is running...')
  )
} catch (e) {
  console.log(e)
}