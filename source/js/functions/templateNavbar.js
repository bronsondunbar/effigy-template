
/* Template navbar */

$(document).on("click", ".navbar-toggler", function (event) {

	$(".nav-content").toggleClass("open");

});

$(document).on("click", ".navbar-toggler-close > i", function (event) {

	console.log("Hello");

});