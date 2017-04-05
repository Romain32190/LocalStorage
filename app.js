function chargement()
{
	var a = localStorage.getItem('string');
	if( a !== null ) {
	$("#retour").append(a);
	}
}




$(document).ready(function()
{


	$("#button").click(function()
	{
		var valeur = $("#age").val();
		localStorage.setItem('string', valeur);
	});


	chargement();
});





