const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

// -------- Datenbank verbinden ---------------------------

var mysql = require('mysql');
var connection = mysql.createConnection(
    {
        host: '82.211.19.79',
        user: 'davenote',
        password: 'davenote',
        database: 'davenote',
    });
connection.connect();

// ---------------------------------------------------------

console.log('Server starts')

// Auf diesen Port antwortet der Server
app.listen(3000, function () {
    console.log('server running and listening on port 3000')
})

//----------------- Daten von Testanlage --------------------

app.get('/show/klasse/:klasse', function (req, res) {
    let stringklasse = req.params.klasse
    let klasseobj = stringklasse.split('&')
    let klasse = klasseobj[0]
    let fach = klasseobj[1]
    let result

    console.log(klasse + fach)

    // Datenbank Daten holen
    connection.query('SELECT datum,art,beschreibung from Test', function (
        error, results, fields) {
        if (error) {
            console.log(error)
            return
        }
        console.log('The solution is: ', results)
        result = results
        
        console.log('111')
        res.status(200).send(results)
        console.log('222')
    })


    if (fach == 'Mathe') {
        //console.log(result)
        //res.status(200).send(JSON.stringify(result))
    }
    if (fach == 'Fsst') {
        console.log('FSST gefunden')
        //res.status(200).send(fachfsstt)
    }
})
