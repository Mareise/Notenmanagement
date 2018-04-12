const express=require('express')
const bodyParser=require('body-parser')

const app=express()

app.use(express.static('public'))
app.use(bodyParser.json())

// --------------------------------------------------------
console.log('Server starts')

// Auf diesen Port antwortet der Server
app.listen(3000,function() {
    console.log('server running and listening on port 3000')
})

//----------------- Daten von Testanlage ------------------------
app.get('/show/klasse/:klasse', function(req,res) {
    let stringklasse = req.params.klasse
    let klasseobj = stringklasse.split('&')
    let klasse = klasseobj[0]
    let fach = klasseobj[1]

    console.log(klasse + fach)



    
    //Datenbank Daten holen
    // ....
    //

    var fachmath = {
        '01.01.2001, Addieren, max. Punkte: 30': [
            {name: 'David Diermayr',        points: '29', grade: '1'},
            {name: 'Maximilian Reisecker',  points: '30', grade: '1'},
            {name: 'Lukas Fehkührer',       points: '7' , grade: '5'}
        ],
        '05.05.2005, Subtrahieren, max.Punkte: 20': [
            {name: 'David Diermayr',        points: '20', grade: '1'},
            {name: 'Maximilian Reisecker',  points: '20', grade: '1'},
            {name: 'Lukas Fehkührer',       points: '10', grade: '4'}
        ]
    }

    var fachfsst = {
        '01.01.2001, Addieren, max. Punkte: 30': [
            {name: 'David Diermayr',        points: '24', grade: '1'},
            {name: 'Maximilian Reisecker',  points: '20', grade: '1'},
            {name: 'Lukas Fehkührer',       points: '7' , grade: '5'}
        ],
        '05.05.2005, Subtrahieren, max.Punkte: 20': [
            {name: 'David Diermayr',        points: '20', grade: '1'},
            {name: 'Maximilian Reisecker',  points: '20', grade: '1'},
            {name: 'Lukas Fehkührer',       points: '10', grade: '4'}
        ]
    }

    var fachmathe = JSON.stringify(fach)
    var fachfsst = JSON.stringify(fach)

    if (fach == 'Mathe') {
        console.log('Mathe gefunden')
        res.status(204).send(fachmathe)
    }
    if (fach == 'Fsst') {
        console.log('FSST gefunden')
        res.status(204).send(fachfsst)
    }

})

