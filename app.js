require('dotenv').config()
require('./config/db');

const express = require('express')
const app = express()
const port = 3000
const router = require('./routes/index')
const {errorHandler,notFound404} = require('./middleware/errorHandler');


app.use(express.json())
app.use(express.urlencoded({extended : false }))

app.use('/',router)

app.use(notFound404)
app.use(errorHandler)

app.listen(port,() => {
    console.log(`Server Listning On Port ${port}`);
})