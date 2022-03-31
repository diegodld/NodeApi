const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./config/routes.js')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extends: false}))
app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(8080,()=>{
    console.log(`Express started at http://localhost:8080`)
})


