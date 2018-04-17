$(document).ready(function () {
    var date_input = $('input[name="date"]'); //our date input has the name "date"
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    var options = {
        format: 'mm-dd-yyyy',
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
    date: ""
};

let schueler = { 
    vn: "",
    nn: ""
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
    //xhttp.setRequestHeader("Content-Type", "application/json");

    xhttp.onload = function () {
        if (this.status == 200) {
            console.log("JUHUUUUUUUUUU")
            console.log(this.responseText)
            schueler = JSON.parse(responseText)
            anzeigen()

        } else {
            console.log("buuu")
        }
    }
    xhttp.onerror = function () {
        console.log("Error")
    }
    console.log(newTest)
}

function anzeigen() {

    let divgrades = document.getElementById('ansicht')
    let table = '<table class="table table-striped table-responsive-md btn-table"> <thead> <tr> <th scope="col">Nachname</th><th scope="col">Vorname</th><th scope="col">Note</th> <th scope="col">Anmerkung</th>  </tr> <thead>'
    table += '<tbody>'
    for(let i=0; i<data.length; i++){
        
        table += '<tr>'
        table += '<th scope="col">'+schueler[i].vn+'</th>'
        table += '<td>'+schueler[i].nn+'</td>'
        table += '<td><select class="browser-default"><option id="note" value="" disabled selected>Note</option><option value="1">gefehlt</option><option value="2">1</option><option value="3">2</option><option value="4">3</option><option value="5">4</option><option value="6">5</option></select></td>' 
        table += '<td> <div class="input-field col s6"><input placeholder="Anmerkung" id="comment" type="text" class="validate"></div></td>'

        
        table += '</tr>'
    }
    table+="</tbody></table>"
    divgrades.innerHTML = table

}

