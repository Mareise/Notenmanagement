const express=require('express')
const bodyParser=require('body-parser')
const mysql = require('mysql')

const app=express()

app.use(express.static('public'))
app.use(bodyParser.json())

// --------------------------------------------------------
console.log('Server starts')

// Auf diesen Port antwortet der Server
app.listen(3000,function() {
    console.log('server running and listening on port 3000')
})

//----------------- neue ------------------------

