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
    let fach = 'Mathe'
    string = klasse + '&' + fach;

    let query = "/show/klasse/" + string;
    console.log(query);
    xhttp.open("GET", query, true);

    xhttp.onload = function () {
        if (this.status == 200) {
            console.log('status=200')
            console.log(this.responseText)
            //data=this.responseText;
            //console.log(JSON.parse(this.responseText))
        } else {
            console.log("buuu")
        }
    }
    xhttp.onerror = function () {
        console.log("Error")
    }

    xhttp.send();

    show();
    
}

function show() {
    

    let table = '<table class="table table-striped table-responsive-md btn-table"> <thead> <tr> <th scope="col">Datum</th><th scope="col">Art</th><th scope="col">Beschreibung</th>  </tr> <thead>';
    table += '<tbody>'
    for (let i=0;i<3;i++) {
        table += '<tr><th scope="col">'+ '12.1.2018' + '</th><td>' + 'LZK' + '</td><td>' + 'Differenzieren' + '</td>  <td><button type="button" class="btn btn-primary btn-rounded btn-sm my-0">Anzeigen</button></td> </tr>'
    }
    table += '</tbody></table>'

    console.log(table)

    document.getElementById('TestListe').innerHTML = table;
}