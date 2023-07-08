require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectToDb = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const app = express()

//express middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

//connect to database
connectToDb()

app.use('/', userRoutes)

module.exports = app

