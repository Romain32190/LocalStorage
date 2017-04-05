	$(document).ready(function() { 

	$("#button").click(function(){

	var valeur = $("#age").val();

	localStorage.setItem("string", valeur);
	var valeur = localStorage.getItem("string");
	$('input').val("");

	});
});

 


