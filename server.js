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

//----------------- Daten von Tests senden --------------------

app.get('/show/klasse/:klasse', function (req, res) {
    let stringklasse = req.params.klasse
    let klasseobj = stringklasse.split('&')
    let klasse = klasseobj[0]
    let fach = klasseobj[1]

    console.log(klasse + fach)

    // Datenbank Testdaten holen
    connection.query('SELECT * from Test', function (
        error, results, fields) {
        if (error) {
            console.log(error)
            return
        }
        console.log('The solution is: ', results)
        
        console.log('111')
        res.status(200).send(results)
        console.log('222')
    })
})

// ------------------ Testergebnisse senden -------------------

app.get('/show/test/:testid', function (req, res) {
    let testid = req.params.testid

// Datenbank Testergebnisse holen
connection.query('SELECT Schueler.vn,Schueler.nn,Ergebniss.note,Ergebniss.Anmerkung from Ergebniss JOIN Schueler ON Ergebniss.sid=Schueler.sid WHERE tid='+testid, function (
    error, results, fields) {
    if (error) {
        console.log(error)
        return
    }
    console.log('The solution is: ', results)
    
    console.log('111')
    res.status(200).send(results)
    console.log('222')
    })
})
