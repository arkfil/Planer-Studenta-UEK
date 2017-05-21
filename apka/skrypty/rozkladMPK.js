
function zapiszPrzystanki(){
	var przystanekPoczatkowy = document.getElementById("przystanekPoczatkowy").value;
	var przystanekKoncowy = document.getElementById("przystanekKoncowy").value;

	zapiszCookie("przystanekPoczatkowy",przystanekPoczatkowy,1733);
	zapiszCookie("przystanekKoncowy",przystanekKoncowy,1733);

	console.log( "Zapis przystankow: " + przystanekPoczatkowy + ", " +przystanekKoncowy);
}

$( "#przystanekKoncowy" ).ready(function() {
	var przystanek1=odczytajCookie("przystanekPoczatkowy");
	var przystanek2=odczytajCookie("przystanekKoncowy");

	document.getElementById("przystanekPoczatkowy").value=przystanek1;
	document.getElementById("przystanekKoncowy").value=przystanek2;
});