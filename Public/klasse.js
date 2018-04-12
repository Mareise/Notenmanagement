var urlParams = new URLSearchParams(window.location.search);

console.log(urlParams.toString()); // "?post=1234&action=edit"
let str=urlParams.toString();

let url = str.split('&')
a=url[0];
x = a.split('=')
klasse = x[1];
console.log(klasse)


function mathe() {
    let xhttp = new XMLHttpRequest();
    let fach = 'Mathe'
    string = klasse + fach;

    let query = "/show/klasse/:" + string;
    console.log(query);
    xhttp.open("GET", query, true);

    xhttp.onload = function () {
        if (this.status == 200) {
            console.log(JSON.parse(this.responseText))
        } else {
            console.log("buuu")
        }
    }
    xhttp.onerror = function () {
        console.log("Error")
    }

    xhttp.send();
}