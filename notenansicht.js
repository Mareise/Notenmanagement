   

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