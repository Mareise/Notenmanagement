$(document).ready(function () {
    var date_input = $('input[name="date"]'); //our date input has the name "date"
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    var options = {
        format: 'yyyy-mm-dd',
        container: container,
        todayHighlight: true,
        autoclose: true,
    };
    date_input.datepicker(options);
})

let newTest = {
    name: "",
    fach: "",
    klasse: "",
    art: "",
    date: "",
    schueler: {
        vn: "",
        nn: "",
        note: "",
        anmerkung: ""
    }
};


function submit() {
    newTest.name = document.getElementById("Name").value
    newTest.fach = document.getElementById("Fach").value
    newTest.klasse = document.getElementById("Klasse").value
    newTest.art = document.getElementById("Art").value
    newTest.date = document.getElementById("Date").value

    let xhttp = new XMLHttpRequest();
    let query = "/getting/data/" + newTest.klasse;
    console.log(query);
    xhttp.open("GET", query, true);

    console.log("nach xhttp.open")
    xhttp.onload = function () {
        console.log("onload")
        if (this.status == 200) {
            console.log("JUHUUUUUUUUUU")
            console.log(this.responseText)
            newTest.schueler = JSON.parse(this.responseText)
            anzeigen()

        } else {
            console.log("buuu")
        }
    }
    console.log("vor onerror")
    xhttp.onerror = function () {
        console.log("Error")
    }

    xhttp.send()    

}

function anzeigen() {

    let divgrades = document.getElementById('ansicht')
    let table = '<table style="margin-top: 5%" class="table table-striped table-responsive-md btn-table"> <thead> <tr> <th scope="col">Nachname</th><th scope="col">Vorname</th><th scope="col">Note</th> <th scope="col">Anmerkung</th>  </tr> <thead>'
    table += '<tbody>'
    for(let i=0; i<newTest.schueler.length; i++){
        
        table += '<tr>'
        table += '<th scope="col">'+newTest.schueler[i].vn+'</th>'
        table += '<td>'+newTest.schueler[i].nn+'</td>'

        table += '<td><select class="custom-select" id="note' + i +  '"><option selected>Note</option><option>gefehlt</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></td>' 
        
        table += '<td> <div class="input-group mb-3"><input placeholder="Anmerkung" id="anmerkung' + i +  '" type="text" class="form-control"></div></td>'

        
        table += '</tr>'
    }
    table+="</tbody></table>"
    table+="<center>"
    table+=' <button class="btn btn-primary" onclick="schicken()" name="submit" type="submit">Submit</button>'
    table+="</center>"
    divgrades.innerHTML = table

}

function schicken() {
    for (let i = 0; i< newTest.schueler.length; i++){
        newTest.schueler[i].note = document.getElementById("note"+i).value
        newTest.schueler[i].anmerkung = document.getElementById("anmerkung"+i).value
    }
    console.log(newTest)

    let query = "/posting/data/" + JSON.stringify(newTest);
    console.log(query);

    let xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", query, true);

    xhttp.onload = function () {
        console.log("onload")
        if (this.status == 200) {
            console.log("JUHUUUUUUUUUU")
            console.log(this.responseText)
        } else {
            console.log("buuu")
        }
    }
    xhttp.onerror = function () {
        console.log("Error")
    }

    xhttp.send()   
}

