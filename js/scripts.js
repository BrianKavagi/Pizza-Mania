function submit(){
var PIZZA SIZE = $("#PIZZA SIZE");
var Large = parseInt("1000");
var Medium = parseInt("800");
var Small = parseInt("500");
if(Large) {
alert("1000");
}
if(Medium) {
alert("Total 800");
}
if(Small) {
alert("Total 500");
}
$(document).ready(function() {
$("form#submit").submit(function(event) {
var Large = parseInt("1000"
 event.preventDefault();
$("#output").text(result);
});
});