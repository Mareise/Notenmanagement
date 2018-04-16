var urlParams = new URLSearchParams(window.location.search);

console.log(urlParams.toString()); // "?post=1234&action=edit"
let str = urlParams.toString();

let url = str.split('&')
a = url[0];
x = a.split('=')
tid = x[1];
console.log(tid)


let xhttp = new XMLHttpRequest();
let query = "/show/test/" + tid;
console.log(query);
xhttp.open("GET", query, true);

xhttp.onload = function () {
    if (this.status == 200) {
        console.log('status=200')
        console.log(this.responseText)
        data = JSON.parse(this.responseText);
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