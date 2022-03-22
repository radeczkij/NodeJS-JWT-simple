const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')

const app = express()
app.use(express.json())
app.use('/auth', authRouter)

try {
  const url = ''
  mongoose.connect(url)
  app.listen(3000, 
    console.log('Server is running...')
  )
} catch (e) {
  console.log(e)
}
