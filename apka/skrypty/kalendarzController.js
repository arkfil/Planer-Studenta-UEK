function ustalMiesiac(miesiacLiczbowo){
	var month = new Array();
	month[0] = "Styczen";
	month[1] = "Luty";
	month[2] = "Marzec";
	month[3] = "Kwiecien";
	month[4] = "Maj";
	month[5] = "Czerwiec";
	month[6] = "Lipiec";
	month[7] = "Sierpien";
	month[8] = "Wrzesien";
	month[9] = "Pazdziernik";
	month[10] = "Listopad";
	month[11] = "Grudzien";
	return month[miesiacLiczbowo];
}

function calleft(){

var rok = $( "#rok" ).text();
		
		var miesiacLiczbowo = $( "#miesiacLiczbowo" ).text();
		--miesiacLiczbowo;
		var nazwaMiesiaca;
		if(miesiacLiczbowo>=0)
			nazwaMiesiaca = ustalMiesiac(miesiacLiczbowo);
		else{
			nazwaMiesiaca = ustalMiesiac(11);
			rok=parseInt(rok)-1;
			miesiacLiczbowo=11;
		}
		


		console.log(parseInt(rok));
		console.log(parseInt(miesiacLiczbowo));
		console.log(nazwaMiesiaca);
		
		var poprzedni = new Date(parseInt(rok),parseInt(miesiacLiczbowo),1,1,1,1,1);
		console.log(poprzedni.toString());

		//$("#calendarHolder").empty();
		
		//$("#calendar").innerHTML="SDDSDSDSDS";
		console.log("------------------------------------------------------");
		var temporarny = new Date(poprzedni.getFullYear(), poprzedni.getMonth()+1, 0);
		var liczbaDniMiesiaca = temporarny.getDate();


		console.log(poprzedni.getDay());
		console.log(liczbaDniMiesiaca);
		console.log(nazwaMiesiaca);
		console.log(miesiacLiczbowo);
		console.log(poprzedni.getFullYear());


		document.getElementById("calendarHolder").innerHTML=rysujKalendarz(poprzedni.getDay(),liczbaDniMiesiaca,nazwaMiesiaca,miesiacLiczbowo,poprzedni.getFullYear());;
		//parent.document.getElementById("calendarHolder").reload();

}
function callright(){

var rok = $( "#rok" ).text();
		
		var miesiacLiczbowo = $( "#miesiacLiczbowo" ).text();
		++miesiacLiczbowo;
		var nazwaMiesiaca;
		if(miesiacLiczbowo<=11)
			nazwaMiesiaca = ustalMiesiac(miesiacLiczbowo);
		else{
			nazwaMiesiaca = ustalMiesiac(11);
			rok=parseInt(rok)+1;
			miesiacLiczbowo=0;
		}
		


		console.log(parseInt(rok));
		console.log(parseInt(miesiacLiczbowo));
		console.log(nazwaMiesiaca);
		
		var poprzedni = new Date(parseInt(rok),parseInt(miesiacLiczbowo),1,1,1,1,1);
		console.log(poprzedni.toString());

		//$("#calendarHolder").empty();
		
		//$("#calendar").innerHTML="SDDSDSDSDS";
		console.log("------------------------------------------------------");
		var temporarny = new Date(poprzedni.getFullYear(), poprzedni.getMonth()+1, 0);
		var liczbaDniMiesiaca = temporarny.getDate();


		console.log(poprzedni.getDay());
		console.log(liczbaDniMiesiaca);
		console.log(nazwaMiesiaca);
		console.log(miesiacLiczbowo);
		console.log(poprzedni.getFullYear());


		document.getElementById("calendarHolder").innerHTML=rysujKalendarz(poprzedni.getDay(),liczbaDniMiesiaca,nazwaMiesiaca,miesiacLiczbowo,poprzedni.getFullYear());;
		//parent.document.getElementById("calendarHolder").reload();

}

function wybierzDzien(id,rok,miesiac){
	console.log(id);
	
	for(var i=1;i<=31;++i){
		var g = document.getElementById(miesiac+"/"+i+"/"+rok);
		if(g!=null) g.style.background = "";
		console.log(miesiac+"/"+i+"/"+rok);
	};

	document.getElementById(id).style.background = "blue";
	

}


