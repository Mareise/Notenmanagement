let xhttp = new XMLHttpRequest();

let query = "/get/data/";
console.log(query);
xhttp.open("GET", query, true);
//xhttp.setRequestHeader("Content-Type", "application/json");

xhttp.onload = function () {
    if (this.status == 200) {
        console.log("JUHUUUUUUUUUU")
        console.log(this.responseText)
        location.href = "noteneingabe.html";
    } else {
        console.log("buuu")
    }
}
xhttp.onerror = function () {
    console.log("Error")
}
console.log("Stringify: " + JSON.stringify(newTest))
xhttp.send();