$(document).ready(function(){
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    var options={
    format: 'mm-dd-yyyy',
    container: container,
    todayHighlight: true,
    autoclose: true,
    };
    date_input.datepicker(options);
})

let newTest = { 
    name: "", 
    fach: "",
    klasse: "",
    art: "",
    date: ""
};


function submit() {
    newTest.name = document.getElementById("Name").value
    newTest.fach = document.getElementById("Fach").value
    newTest.klasse = document.getElementById("Klasse").value
    newTest.art = document.getElementById("Art").value
    newTest.date = document.getElementById("Date").value
    
    
    console.log(newTest)

    let xhttp = new XMLHttpRequest();

    let query = "/add/data/" + JSON.stringify(newTest);
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
    console.log("Stringify: "+ JSON.stringify(newTest))
    xhttp.send();

    
}