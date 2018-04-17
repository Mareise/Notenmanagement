let data;

function suchen() {
    let nachname = document.getElementById("nachname").value
    console.log(nachname)

    let xhttp = new XMLHttpRequest();
    let query = "/suche/nachname/" + nachname;
    console.log(query);
    xhttp.open("GET", query, true);

    xhttp.onload = function () {
        console.log("onload")
        if (this.status == 200) {
            console.log("JUHUUUUUUUUUU")
            console.log(this.responseText)
            data = JSON.parse(this.responseText)
            show()

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
    let table = '<table class="table table-striped table-responsive-md btn-table"> <thead> <tr> <th scope="col">Fach</th><th scope="col">Test</th><th scope="col">Datum</th><th scope="col">Note</th> <th scope="col">Anmerkung</th>  </tr> <thead>';
    table += '<tbody>'
    for (let i=0;i<data.length;i++) {
        let datum = data[i].datum.split('T');
        data[i].datum = datum[0];
        table += '<tr><th scope="col">'+ data[i].fachname + '</th><td>' + data[i].testname +'</th><td>' + data[i].datum + '</td><td>' + data[i].note + '</td> <td>' + data[i].Anmerkung + '</td> </tr>'
    }
    table += '</tbody></table>'

    console.log(table)

    document.getElementById('ansicht').innerHTML = table;
}