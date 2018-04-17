let xhttp = new XMLHttpRequest();

let schueler = { 
    vn: "",
    vn: ""
};

let query = "/get/data/";
console.log(query);
xhttp.open("GET", query, true);
//xhttp.setRequestHeader("Content-Type", "application/json");

xhttp.onload = function () {
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
console.log("Stringify: " + JSON.stringify())
xhttp.send();

function show() {
    let table = '<table class="table table-striped table-responsive-md btn-table"> <thead> <tr> <th scope="col">Nachname</th><th scope="col">Vorname</th><th scope="col">Note</th> <th scope="col">Anmerkung</th>  </tr> <thead>';
    table += '<tbody>'
    for (let i=0;i<data.length;i++) {
        table += '<tr><th scope="col">'+ data[i].nn + '</th><td>' + data[i].vn + '</td><td>' + data[i].note + '</td> <td>' + data[i].Anmerkung + '</td> </tr>'
    }
    table += '</tbody></table>'

    console.log(table)

    document.getElementById('ansicht').innerHTML = table;
}


function enterGrades(){
    let divgrades = document.getElementById('noten')
    let table = '<table class="table table-striped table-responsive-md btn-table"> <thead> <tr> <th scope="col">Nachname</th><th scope="col">Vorname</th><th scope="col">Note</th> <th scope="col">Anmerkung</th>  </tr> <thead>'
    table += '<tbody>'
    for(let i=0; i<data.length; i++){
        
        table += '<tr>'
        table += '<th scope="col">'+data[i].vn+'</th>'
        table += '<td>'+data[i].nn+'</td>'
        table += '<td><select class="browser-default"><option id="note" value="" disabled selected>Note</option><option value="1">gefehlt</option><option value="2">1</option><option value="3">2</option><option value="4">3</option><option value="5">4</option><option value="6">5</option></select></td>' 
        table += '<td> <div class="input-field col s6"><input placeholder="Anmerkung" id="comment" type="text" class="validate"></div></td>'

        
        table += '</tr>'
    }
    table+="</tbody></table>"
    divgrades.innerHTML = table
}