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
    console.log(fach)

    console.log(klasse + fach)

    // Datenbank Testdaten holen
    connection.query("SELECT  Test.tid,Test.fid,Test.kid,Test.datum,Test.art,Test.testname FROM Klasse JOIN Test JOIN Fach ON Klasse.kid=Test.kid AND Fach.fid=Test.fid WHERE Klasse.klassenname='"+klasse+"' AND Fach.fachname='"+fach+"'", function (
        error, results, fields) {
        if (error) {
            console.log(error)
            return
        }
        console.log('The solution is: ', results)
        
        res.status(200).send(results)
    })
})

// ------------------ Testergebnisse senden -------------------

app.get('/show/test/:testid', function (req, res) {
    let testid = req.params.testid

// Datenbank Testergebnisse holen
connection.query('SELECT Schueler.vn,Schueler.nn,Ergebniss.note,Ergebniss.Anmerkung from Ergebniss JOIN Schueler ON Ergebniss.sid=Schueler.sid WHERE Ergebniss.tid='+testid, function (
    error, results, fields) {
    if (error) {
        console.log(error)
        return
    }
    console.log('The solution is: ', results)
    
    res.status(200).send(results)

    })
})

// ---------------------Test hinzufügen----------------------

app.get('/add/data/:data', function (req, res) {
    console.log('ASDFG')
    let data = req.params.data
    console.log(data)

// Datenbank Testergebnisse holen
/*connection.query('SELECT Schueler.vn,Schueler.nn from Ergebniss JOIN Schueler ON Ergebniss.sid=Schueler.sid WHERE Ergebniss.tid='+testid, function (
    error, results, fields) {
    if (error) {
        console.log(error)
        return
    }
    console.log('The solution is: ', results)
    

    res.status(200).send(results)
    console.log('222')
    })*/
    res.status(200).send("hallo")
})