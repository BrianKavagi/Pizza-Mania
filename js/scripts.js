function submit(){
var Pizza size = $("#Pizza size");
var flavor = $("input:radio[name=flavor]:checked").val();
var Toppings = $("#Toppings").val();
if(Pizza size="Large") {
alert("Total 1000");
}
if(Pizza size="Medium") {
alert("Total 800");
}
if(Pizza size="Small") {
alert("Total 500");
}
$(document).ready(function() {
$("form#submit").submit(function(event) {
event.preventDefault();
$("#output").text(result);
});
});