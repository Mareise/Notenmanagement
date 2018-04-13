var urlParams = new URLSearchParams(window.location.search);

console.log(urlParams.toString()); // "?post=1234&action=edit"
let str=urlParams.toString();

let url = str.split('&')
a=url[0];
x = a.split('=')
klasse = x[1];
console.log(klasse)

let data


function mathe() {
    let xhttp = new XMLHttpRequest();
    let fach = 'Mathematik'
    string = klasse + '&' + fach;

    let query = "/show/klasse/" + string;
    console.log(query);
    xhttp.open("GET", query, true);

    xhttp.onload = function () {
        if (this.status == 200) {
            console.log('status=200')
            console.log(this.responseText)
            data=JSON.parse(this.responseText);
            show();
            //console.log(JSON.parse(this.responseText))
        } else {
            console.log("buuu")
        }
    }
    xhttp.onerror = function () {
        console.log("Error")
    }

    xhttp.send();

    
    
}

function show() {

        

    let table = '<table class="table table-striped table-responsive-md btn-table"> <thead> <tr> <th scope="col">Datum</th><th scope="col">Art</th><th scope="col">Beschreibung</th>  </tr> <thead>';
    table += '<tbody>'
    for (let i=0;i<data.length;i++) {
        let datum = data[i].datum.split('T');
        data[i].datum = datum[0];
        table += '<tr><th scope="col">'+ data[i].datum + '</th><td>' + data[i].art + '</td><td>' + data[i].testname + '</td>  <td><button type="button" onclick="senden(' + data[i].tid +  ')" class="btn btn-primary btn-rounded btn-sm my-0">Anzeigen</button></td> </tr>'
    }
    table += '</tbody></table>'

    console.log(table)

    document.getElementById('TestListe').innerHTML = table;
}

function senden(tid) {
    console.log("senden("+ tid + ")")
    //window.open("localhost:3000/notenansicht?"+"tid=" + tid + "&action=edit","_self")

    window.location.replace("localhost:3000/notenansicht?tid='" + tid + "'&action='edit'");

    location.href = "localhost:3000/notenansicht?tid='" + tid + "'&action='edit'";
}