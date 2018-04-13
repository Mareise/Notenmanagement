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

    //show();
    
}

function show() {
    let table = '<table> <tr> <th>Datum</th><th>Art</th><th>Test Name</th></tr>';
    table += '<tr><td>'+ '12.1.2018' + '</td><td>' + 'LZK' + '</td><td>' + 'Differenzieren' + '</td></tr>'
    table += '</table>'

    console.log(table)

    document.getElementById('TestListe').innerHTML = table;
}