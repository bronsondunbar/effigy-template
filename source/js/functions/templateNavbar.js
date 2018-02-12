
/* Template navbar */

$(document).ready(function(){

  $(".navbar-toggler").click(function () {

  	$(".nav-content").toggleClass("open");

  });

  $(".navbar-toggler-close").click(function (event) {

  	event.preventDefault();

  	$(".nav-content").toggleClass("open");

  });

});