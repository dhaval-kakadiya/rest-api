require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const router = require('./routes/index')
require('./config/db');

app.use(express.json())
app.use(express.urlencoded({extended : false }))

app.use('/api',router)

app.listen(port,() => {
    console.log(`Server Listning On Port ${port}`);
})