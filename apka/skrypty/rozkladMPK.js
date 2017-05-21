
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

	if (typeof przystanek1 !== 'undefined') 
		przystanek1=odczytajCookie("przystanekPoczatkowy");
	if (typeof przystanek1 !== 'undefined') 
		przystanek1=odczytajCookie("przystanekPoczatkowy");


	if (typeof przystanek2 !== 'undefined') 
		przystanek2=odczytajCookie("przystanekKoncowy");
	if (typeof przystanek2 !== 'undefined') 
		przystanek2=odczytajCookie("przystanekKoncowy");


	document.getElementById("przystanekPoczatkowy").value=przystanek1;
	document.getElementById("przystanekKoncowy").value=przystanek2; 
});

function zwrocGodzinyKomunikacji(dataEventu){

	var godzinaRef = dataEventu.toString().substring(11,14);
	//var godzinaRef = new Date(dataEventu.toString());

	var dzienLiczb = new Date(dataEventu.toString()).getDay();
	var dzien="";
	switch(dzienLiczb){
		case 0:
			dzien="sw";
		break;
		case 1:
			dzien="p";
		break;
		case 2:
			dzien="p";
		break;
		case 3:
			dzien="p";
		break;
		case 4:
			dzien="p";
		break;
		case 5:
			dzien="p";
		break;
		case 6:
			dzien="s";
		break;
	}



	console.log("ahahhahaha TUTAJ DZIEN DO ZWROCENIA GODZIN BLAH"+godzinaRef);

	var poczatkowy = odczytajCookie("przystanekPoczatkowy");
	var koncowy = odczytajCookie("przystanekKoncowy");
	var strona = "http://v-ie.uek.krakow.pl/~s186287/IntegracjaZRozkladem/posrednik.php?przystanek1="+poczatkowy+"&przystanek2="+koncowy+"&dzien="+dzien;

	console.log(strona);
	var godziny="";
	$.get(strona, function( kod ) {

		for (var i = 0, len = kod.length; i < len; i++) {
			if(kod[i]=="|"){
				++i;
				godziny+=kod[i]+kod[i+1]+kod[i+2]+kod[i+3]+kod[i+4];
				i+=4;
			}

		}

			document.getElementById("coos").value=godziny;
			console.log(godziny);
	});	






	return godziny;

}