var urlParams = new URLSearchParams(window.location.search);

console.log(urlParams.toString()); // "?post=1234&action=edit"
let str=urlParams.toString();

let url = str.split('&')
a=url[0];
x = a.split('=')
tid = x[1];
console.log(tid)


/*let table = '<table class="table table-striped table-responsive-md btn-table"> <thead> <tr> <th scope="col">Vorname</th><th scope="col">Nachname</th><th scope="col">Note</th>  <th scope="col">Anmerkung</th>  </tr> <thead>';
table += '<tbody>'
for (let i = 0; i < data.length; i++) {
    let datum = data[i].datum.split('T');
    data[i].datum = datum[0];
    table += '<tr><th scope="col">' + data[i].datum + '</th><td>' + data[i].art + '</td><td>' + data[i].testname + '</td>  <td><button type="button" onclick="senden(' + data[i].tid + ')" class="btn btn-primary btn-rounded btn-sm my-0">Anzeigen</button></td> </tr>'
}
table += '</tbody></table>'

console.log(table)

document.getElementById('ansicht').innerHTML = table;*/