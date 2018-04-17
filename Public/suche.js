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
            data = JSON.parse(responseText)
            show()

        } else {
            console.log("buuu")
        }
    }
    console.log("vor onerror")
    xhttp.onerror = function () {
        console.log("Error")
    }
}

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