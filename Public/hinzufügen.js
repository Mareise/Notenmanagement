$(document).ready(function(){
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    var options={
    format: 'mm/dd/yyyy',
    container: container,
    todayHighlight: true,
    autoclose: true,
    };
    date_input.datepicker(options);
})

function submit() {
    let name = document.getElementById("Name").value
    let fach = document.getElementById("Fach").value
    let klasse = document.getElementById("Klasse").value
    let art = document.getElementById("Art").value
    let date = document.getElementById("Date").value
    
    
    console.log(name+" "+fach+" "+klasse+" "+date+" "+art)
}